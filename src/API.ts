/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateDetectedTextInput = {
  id?: string | null,
  text: string,
  confidence: number,
  timestamp: string,
};

export type ModelDetectedTextConditionInput = {
  text?: ModelStringInput | null,
  confidence?: ModelFloatInput | null,
  timestamp?: ModelStringInput | null,
  and?: Array< ModelDetectedTextConditionInput | null > | null,
  or?: Array< ModelDetectedTextConditionInput | null > | null,
  not?: ModelDetectedTextConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type DetectedText = {
  __typename: "DetectedText",
  id: string,
  text: string,
  confidence: number,
  timestamp: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateDetectedTextInput = {
  id: string,
  text?: string | null,
  confidence?: number | null,
  timestamp?: string | null,
};

export type DeleteDetectedTextInput = {
  id: string,
};

export type ModelDetectedTextFilterInput = {
  id?: ModelIDInput | null,
  text?: ModelStringInput | null,
  confidence?: ModelFloatInput | null,
  timestamp?: ModelStringInput | null,
  and?: Array< ModelDetectedTextFilterInput | null > | null,
  or?: Array< ModelDetectedTextFilterInput | null > | null,
  not?: ModelDetectedTextFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelDetectedTextConnection = {
  __typename: "ModelDetectedTextConnection",
  items:  Array<DetectedText | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionDetectedTextFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  text?: ModelSubscriptionStringInput | null,
  confidence?: ModelSubscriptionFloatInput | null,
  timestamp?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionDetectedTextFilterInput | null > | null,
  or?: Array< ModelSubscriptionDetectedTextFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type CreateDetectedTextMutationVariables = {
  input: CreateDetectedTextInput,
  condition?: ModelDetectedTextConditionInput | null,
};

export type CreateDetectedTextMutation = {
  createDetectedText?:  {
    __typename: "DetectedText",
    id: string,
    text: string,
    confidence: number,
    timestamp: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateDetectedTextMutationVariables = {
  input: UpdateDetectedTextInput,
  condition?: ModelDetectedTextConditionInput | null,
};

export type UpdateDetectedTextMutation = {
  updateDetectedText?:  {
    __typename: "DetectedText",
    id: string,
    text: string,
    confidence: number,
    timestamp: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteDetectedTextMutationVariables = {
  input: DeleteDetectedTextInput,
  condition?: ModelDetectedTextConditionInput | null,
};

export type DeleteDetectedTextMutation = {
  deleteDetectedText?:  {
    __typename: "DetectedText",
    id: string,
    text: string,
    confidence: number,
    timestamp: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetDetectedTextQueryVariables = {
  id: string,
};

export type GetDetectedTextQuery = {
  getDetectedText?:  {
    __typename: "DetectedText",
    id: string,
    text: string,
    confidence: number,
    timestamp: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListDetectedTextsQueryVariables = {
  filter?: ModelDetectedTextFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDetectedTextsQuery = {
  listDetectedTexts?:  {
    __typename: "ModelDetectedTextConnection",
    items:  Array< {
      __typename: "DetectedText",
      id: string,
      text: string,
      confidence: number,
      timestamp: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateDetectedTextSubscriptionVariables = {
  filter?: ModelSubscriptionDetectedTextFilterInput | null,
};

export type OnCreateDetectedTextSubscription = {
  onCreateDetectedText?:  {
    __typename: "DetectedText",
    id: string,
    text: string,
    confidence: number,
    timestamp: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateDetectedTextSubscriptionVariables = {
  filter?: ModelSubscriptionDetectedTextFilterInput | null,
};

export type OnUpdateDetectedTextSubscription = {
  onUpdateDetectedText?:  {
    __typename: "DetectedText",
    id: string,
    text: string,
    confidence: number,
    timestamp: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteDetectedTextSubscriptionVariables = {
  filter?: ModelSubscriptionDetectedTextFilterInput | null,
};

export type OnDeleteDetectedTextSubscription = {
  onDeleteDetectedText?:  {
    __typename: "DetectedText",
    id: string,
    text: string,
    confidence: number,
    timestamp: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
