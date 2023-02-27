import { Formik, Form } from "formik";
import { useContext } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { UserContext } from "../../contexts/UserContext";
import { useLoginUser } from "../../hooks/user";
import { FEED_PATH } from "../../routes/const";
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
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const { mutateAsync: loginUser } = useLoginUser();
  const handleSubmit = (values: Login) => {
    loginUser(values)
      .then((response) => {
        console.log(response);
        setUser(response); // Update the user object here
        navigate(FEED_PATH);
        toast.success("Login successful");
      })
      .catch(() => toast.error("You've entered wrong details"));
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
