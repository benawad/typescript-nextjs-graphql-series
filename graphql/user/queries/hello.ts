import { gql } from "apollo-boost";

export const helloQuery = gql`
  query Hello {
    hello
  }
`;
