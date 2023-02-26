import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useLoginUser } from "../../hooks/user";
import Button from "../Button/Button";
import FormikInput from "../FormikInput/FormikInput";
import styles from "./LoginForm.module.scss";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
});

interface Login {
  email: string;
  password: string;
}

const LoginForm = () => {
  const { mutateAsync: loginUser } = useLoginUser();
  const handleSubmit = (values: Login) => {
    loginUser(values);
  };

  return (
    <div className={styles.form}>
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
