import { Button, TextField } from "@mui/material";
import { Formik, Form, Field, FormikHelpers } from "formik";
import { useIntl, FormattedMessage } from "react-intl";

import { initialValues } from "./initialValues";

type FormLoginValues = typeof initialValues;

type FormLoginProps = {
  onSubmit: (
    values: FormLoginValues,
    formikHelpers: FormikHelpers<FormLoginValues>
  ) => void;
};

export const FormLogin = ({ onSubmit }: FormLoginProps) => {
  const intl = useIntl();

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, formikHelpers) => {
        onSubmit(values, formikHelpers);
      }}
    >
      {({ isSubmitting }) => {
        return (
          <Form
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "2rem",
              maxWidth: "40rem",
            }}
          >
            <Field
              name="email"
              role="input-email"
              as={TextField}
              placeholder={intl.formatMessage({ id: "EMAIL" })}
              label={intl.formatMessage({ id: "EMAIL" })}
            />
            <Field
              name="password"
              role="input-password"
              as={TextField}
              placeholder={intl.formatMessage({ id: "PASSWORD" })}
              label={intl.formatMessage({ id: "PASSWORD" })}
            />
            <Button
              type="submit"
              disabled={isSubmitting}
              color="primary"
              variant="contained"
            >
              <FormattedMessage id="LOGIN" />
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
};
