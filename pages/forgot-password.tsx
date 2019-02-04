import { Field, Formik } from "formik";
import Router from "next/router";
import React from "react";
import { InputField } from "../components/fields/InputField";
import Layout from "../components/Layout";
import { ForgotPasswordComponent } from "../generated/apolloComponents";

export default () => {
  return (
    <Layout title="Forgot Password page">
      <ForgotPasswordComponent>
        {forgotPassword => (
          <Formik
            onSubmit={async data => {
              const response = await forgotPassword({
                variables: data
              });
              console.log(response);
              Router.push("/check-email");
            }}
            initialValues={{
              email: ""
            }}
          >
            {({ handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <Field
                  name="email"
                  placeholder="email"
                  component={InputField}
                />
                <button type="submit">forgot password</button>
              </form>
            )}
          </Formik>
        )}
      </ForgotPasswordComponent>
    </Layout>
  );
};
