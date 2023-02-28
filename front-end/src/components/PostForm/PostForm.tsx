import { Formik, Form, Field } from "formik";
import { FormikHelpers } from "formik";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useCreatePost, usePosts } from "../../hooks/posts";
import { NewPost } from "../../types/posts";
import Button from "../Button/Button";
import styles from "./PostForm.module.scss";

const PostForm = () => {
  const { user } = useContext(UserContext);
  const { first_name = "", last_name = "" } = user ?? {};
  const { mutateAsync: createPost } = useCreatePost();
  const { refetch } = usePosts();

  const handleSubmit = (
    values: NewPost,
    { resetForm }: FormikHelpers<NewPost>
  ) => {
    createPost({
      ...values,
      date: new Date().toString(),
    });
    resetForm();
    refetch();
  };

  return (
    <div>
      <Formik
        initialValues={{
          content: "",
          first_name: first_name,
          last_name: last_name,
          date: "",
        }}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className={styles.form}>
            <Field
              className={styles.form__textarea}
              name="content"
              placeholder="Share what's new in your life!"
              component="textarea"
            />
            <Button variant="primary" type="submit">
              SHARE
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default PostForm;
