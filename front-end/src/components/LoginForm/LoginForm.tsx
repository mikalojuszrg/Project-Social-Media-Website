import { Formik, Form } from "formik";
import * as Yup from "yup";
import Button from "../Button/Button";
import FormikInput from "../FormikInput/FormikInput";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
});

interface Login {
  email: string;
  password: string;
}

const LoginForm = () => {
  const handleSubmit = (values: Login) => {
    console.log(values);
  };

  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <FormikInput type="email" name="email" placeholder="Email" />
            <FormikInput
              type="password"
              name="password"
              placeholder="Password"
            />
            <Button variant="primary" type="submit">
              GET STARTED
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
