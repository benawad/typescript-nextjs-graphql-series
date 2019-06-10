import Link from "next/link";
import * as React from "react";
import Layout from "../components/Layout";
import { LoginComponent } from "../generated/apolloComponents";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";

const IndexPage: React.FunctionComponent = () => {
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>hello Next.js 👋</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
      <LoginComponent>
        {mutate => (
          <button
            onClick={async () => {
              const response = await mutate({
                variables: { email: "test@test.com", password: "password" }
              });

              console.log(response);
            }}
          >
            call login mutation
          </button>
        )}
      </LoginComponent>
      <Mutation
        mutation={gql`
          mutation {
            createPost
          }
        `}
      >
        {cp => <button onClick={() => cp()}>create post</button>}
      </Mutation>
      <Mutation
        mutation={gql`
          mutation {
            updatePost
          }
        `}
      >
        {cp => <button onClick={() => cp()}>update post</button>}
      </Mutation>
    </Layout>
  );
};

export default IndexPage;
