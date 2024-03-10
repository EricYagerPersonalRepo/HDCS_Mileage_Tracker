/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getDetectedText = /* GraphQL */ `query GetDetectedText($id: ID!) {
  getDetectedText(id: $id) {
    id
    text
    confidence
    timestamp
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetDetectedTextQueryVariables,
  APITypes.GetDetectedTextQuery
>;
export const listDetectedTexts = /* GraphQL */ `query ListDetectedTexts(
  $filter: ModelDetectedTextFilterInput
  $limit: Int
  $nextToken: String
) {
  listDetectedTexts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      text
      confidence
      timestamp
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListDetectedTextsQueryVariables,
  APITypes.ListDetectedTextsQuery
>;
