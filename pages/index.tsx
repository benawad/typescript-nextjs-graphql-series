import { gql } from "apollo-boost";
import Link from "next/link";
import * as React from "react";
import { Mutation } from "react-apollo";
import Layout from "../components/Layout";

const IndexPage: React.FunctionComponent = () => {
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>hello Next.js 👋</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
      <Mutation
        mutation={gql`
          mutation {
            login(email: "test@test.com", password: "qqq") {
              id
              firstName
              lastName
              email
              name
            }
          }
        `}
      >
        {mutate => (
          <button
            onClick={async () => {
              const response = await mutate();
              console.log(response);
            }}
          >
            call login mutation
          </button>
        )}
      </Mutation>
    </Layout>
  );
};

export default IndexPage;
