import App, { Container } from "next/app";
import React from "react";
import { ApolloProvider } from "react-apollo";
import withApollo from "../lib/withApollo";
import { StoreProvider } from "easy-peasy";
import { snackbarStore } from "../components/snackbarStore";
import { ErrorSnackbar } from "../components/ErrorSnackbar";

class MyApp extends App<any> {
  render() {
    const { Component, pageProps, apolloClient } = this.props;
    return (
      <Container>
        <ApolloProvider client={apolloClient}>
          <Component {...pageProps} />
          <StoreProvider store={snackbarStore}>
            <ErrorSnackbar />
          </StoreProvider>
        </ApolloProvider>
      </Container>
    );
  }
}

export default withApollo(MyApp);
