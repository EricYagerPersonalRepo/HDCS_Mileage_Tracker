// Import AWS SDK and node-fetch for making HTTP requests
const AWS = require('aws-sdk');
const axios = require('axios');
require('dotenv').config();


// Instantiate the Rekognition and S3 clients
const rekognition = new AWS.Rekognition();
const s3 = new AWS.S3();

// Environment variables for GraphQL API endpoint and API Key
let graphqlEndpoint = process.env.aws_appsync_graphqlEndpoint;
let apiKey = process.env.aws_appsync_apiKey;

if (graphqlEndpoint==undefined || apiKey==undefined) {
  console.log('Loading local credentials for testing...');
  const localEnv = require('./credentials/local-env.json');
  graphqlEndpoint = localEnv.aws_appsync_graphqlEndpoint;
  graphqlApiKey = localEnv.aws_appsync_apiKey;
}

console.log({"Endpoint: ": graphqlEndpoint, "apiKey: ": apiKey} )

exports.handler = async function (event) {
    //console.log('Received S3 event:', JSON.stringify(event, null, 2));
    const bucket = event.Records[0].s3.bucket.name;
    const key = decodeURIComponent(event.Records[0].s3.object.key.replace(/\+/g, ' ')); // Decode key

    console.log(`Bucket: ${bucket}`, `Key: ${key}`);

    // Set up parameters for Rekognition DetectText API call
    const params = {
        Image: {
            S3Object: {
                Bucket: bucket,
                Name: key,
            },
        },
    };

    try {
        // Call Rekognition to detect text in the image
        const rekognitionResult = await rekognition.detectText(params).promise();
        //console.log('Rekognition DetectText result:', JSON.stringify(rekognitionResult, null, 2));
        
        // Log detected text and call the GraphQL API
        if (rekognitionResult.TextDetections) {
          const detectedTexts = rekognitionResult.TextDetections.map(detected => ({
            text: detected.DetectedText,
            confidence: detected.Confidence
          }));
          console.log(detectedTexts)
          await createDetectedText(detectedTexts, 99.40288543701172)
          /*  for (const textDetection of rekognitionResult.TextDetections) {
                console.log(`Detected text: ${textDetection.DetectedText}`);
                // Call GraphQL API to store the detected text in DynamoDB
                await createDetectedText(textDetection.DetectedText, textDetection.Confidence);
            }*/
        }
    } catch (error) {
        console.error(`Error processing image with Rekognition:`, error);
        throw error;
    }
};

async function createDetectedText(text, confidence) {
  const mutation = `
    mutation CreateDetectedText($input: CreateDetectedTextInput!) {
      createDetectedText(input: $input) {
        id
        text
        confidence
        timestamp
      }
    }
  `;

  // Structure the variables to include an 'input' object
  const variables = {
    input: {
      text: text,
      confidence: confidence,
      timestamp: new Date().toISOString(),
    }
  };

  const response = await axios.post(graphqlEndpoint, {
    query: mutation,
    variables: variables
  }, {
    headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
    }
  });

  const responseBody = await response.data;
  console.log('GraphQL response:', responseBody);
}
