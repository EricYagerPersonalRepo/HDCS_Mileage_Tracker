/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createDetectedText = /* GraphQL */ `mutation CreateDetectedText(
  $input: CreateDetectedTextInput!
  $condition: ModelDetectedTextConditionInput
) {
  createDetectedText(input: $input, condition: $condition) {
    id
    text
    confidence
    timestamp
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateDetectedTextMutationVariables,
  APITypes.CreateDetectedTextMutation
>;
export const updateDetectedText = /* GraphQL */ `mutation UpdateDetectedText(
  $input: UpdateDetectedTextInput!
  $condition: ModelDetectedTextConditionInput
) {
  updateDetectedText(input: $input, condition: $condition) {
    id
    text
    confidence
    timestamp
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateDetectedTextMutationVariables,
  APITypes.UpdateDetectedTextMutation
>;
export const deleteDetectedText = /* GraphQL */ `mutation DeleteDetectedText(
  $input: DeleteDetectedTextInput!
  $condition: ModelDetectedTextConditionInput
) {
  deleteDetectedText(input: $input, condition: $condition) {
    id
    text
    confidence
    timestamp
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteDetectedTextMutationVariables,
  APITypes.DeleteDetectedTextMutation
>;
