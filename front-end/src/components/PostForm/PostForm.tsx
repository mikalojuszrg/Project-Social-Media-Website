import { Field, Form, Formik } from "formik";
import { useContext, useState } from "react";
import { useCreatePost, usePosts } from "../../hooks/posts";

import Button from "../Button/Button";
import { FormikHelpers } from "formik";
import { NewPost } from "../../types/posts";
import { UserContext } from "../../contexts/UserContext";
import styles from "./PostForm.module.scss";

const PostForm = () => {
  const { user } = useContext(UserContext);
  const { first_name = "", last_name = "", email = "" } = user ?? {};
  const { mutateAsync: createPost } = useCreatePost();
  const { refetch, isLoading } = usePosts();
  const [isFetching, setIsFetching] = useState(false);

  const handleSubmit = async (
    values: NewPost,
    { resetForm }: FormikHelpers<NewPost>
  ) => {
    setIsFetching(true);
    await createPost({
      ...values,
      date: new Date().toString(),
    });
    resetForm();
    await refetch();
    setIsFetching(false);
  };

  return (
    <div className={styles.container}>
      <Formik
        initialValues={{
          content: "",
          email: email,
          id: new Date().getTime(),
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
            <Button
              variant="primary"
              type="submit"
              disabled={isLoading || isFetching}
            >
              {isFetching ? "Sharing..." : "SHARE"}
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default PostForm;
