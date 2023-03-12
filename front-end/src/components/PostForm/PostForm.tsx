import * as Yup from "yup";

import { Field, Form, Formik, FormikHelpers } from "formik";
import { useContext, useState } from "react";
import { useCreatePost, usePosts } from "../../hooks/posts";

import Button from "../Button/Button";
import { NewPost } from "../../types/posts";
import { UserContext } from "../../contexts/UserContext";
import styles from "./PostForm.module.scss";

const validationSchema = Yup.object().shape({
  content: Yup.string().required("Your post can't be empty. Write something!"),
  image: Yup.mixed().test(
    "fileSize",
    "Image file size should be less than 2MB",
    (value: any) => !value || (value && (value as File).size <= 2000000)
  ),
});

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

  const handleImageChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    setFieldValue: (field: string, value: any) => void
  ) => {
    const file = event.currentTarget.files?.[0];
    if (file) {
      setFieldValue("image", file);
    }
  };

  return (
    <div className={styles.container}>
      <Formik
        initialValues={
          {
            content: "",
            email: email,
            id: new Date().getTime(),
            first_name: first_name,
            last_name: last_name,
            date: "",
            image: null,
          } as NewPost
        }
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ setFieldValue }) => (
          <Form className={styles.form}>
            <Field
              className={styles.form__textarea}
              name="content"
              placeholder="Share what's new in your life!"
              component="textarea"
            />
            <input
              id="image"
              name="image"
              type="file"
              accept="image/*"
              onChange={(event) => handleImageChange(event, setFieldValue)}
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
