import { ApolloClient, NormalizedCacheObject } from "apollo-boost";
import { NextContext } from "next";

export interface MyContext extends NextContext {
  apolloClient: ApolloClient<NormalizedCacheObject>;
}
