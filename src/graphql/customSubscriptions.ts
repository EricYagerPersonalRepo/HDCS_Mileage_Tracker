/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateDetectedText = /* GraphQL */ `subscription OnCreateDetectedText(
  $filter: ModelSubscriptionDetectedTextFilterInput
) {
  onCreateDetectedText(filter: $filter) {
    id
    text
    confidence
    timestamp
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateDetectedTextSubscriptionVariables,
  APITypes.OnCreateDetectedTextSubscription
>;
export const onUpdateDetectedText = /* GraphQL */ `subscription OnUpdateDetectedText(
  $filter: ModelSubscriptionDetectedTextFilterInput
) {
  onUpdateDetectedText(filter: $filter) {
    id
    text
    confidence
    timestamp
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateDetectedTextSubscriptionVariables,
  APITypes.OnUpdateDetectedTextSubscription
>;
export const onDeleteDetectedText = /* GraphQL */ `subscription OnDeleteDetectedText(
  $filter: ModelSubscriptionDetectedTextFilterInput
) {
  onDeleteDetectedText(filter: $filter) {
    id
    text
    confidence
    timestamp
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteDetectedTextSubscriptionVariables,
  APITypes.OnDeleteDetectedTextSubscription
>;
