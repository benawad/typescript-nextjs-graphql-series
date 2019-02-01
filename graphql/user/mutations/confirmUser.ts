import { gql } from "apollo-boost";

export const confirmUserMutation = gql`
  mutation ConfirmUser($token: String!) {
    confirmUser(token: $token)
  }
`;
