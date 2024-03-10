import AWS from 'aws-sdk';

// Configure AWS globally
AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: 'your-region' // Make sure to replace 'your-region' with your actual AWS region
});
const client = new AWS.Rekognition();

interface DetectTextResult {
    DetectedText: string;
    Type: string;
    Id: number;
    ParentId?: number;
    Confidence: number;
    Polygon?: AWS.Rekognition.Polygon;
}

export async function detectTextInImage(bucket: string, photo: string): Promise<DetectTextResult[]> {
    return new Promise((resolve, reject) => {
        const params: AWS.Rekognition.DetectTextRequest = {
        Image: {
            S3Object: {
            Bucket: bucket,
            Name: photo,
            },
        },
        };

        client.detectText(params, (err: AWS.AWSError, data: AWS.Rekognition.DetectTextResponse) => {
        if (err) {
            console.error(err, err.stack);
            reject(err); // Reject the promise on error
        } else {
            const results: DetectTextResult[] = data.TextDetections?.map(label => ({
            DetectedText: label.DetectedText!,
            Type: label.Type!,
            Id: label.Id!,
            ParentId: label.ParentId,
            Confidence: label.Confidence!,
            Polygon: label.Geometry?.Polygon
            })) || [];
            resolve(results); // Resolve the promise with the detection results
        }
        });
    });
}
