import { Formik, Form, Field } from "formik";
import { FormikHelpers } from "formik";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useCreatePost } from "../../hooks/posts";
import { NewPost } from "../../types/posts";
import { dateNow } from "../../utils/getDate";
import Button from "../Button/Button";

const PostForm = () => {
  const { user } = useContext(UserContext);
  const { first_name = "", last_name = "" } = user ?? {};
  const { mutateAsync: createPost } = useCreatePost();

  const handleSubmit = (
    values: NewPost,
    { resetForm }: FormikHelpers<NewPost>
  ) => {
    createPost(values);
    resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={{
          content: "",
          first_name: first_name,
          last_name: last_name,
          date: dateNow,
        }}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <Field
              name="content"
              placeholder="Share what's new in your life!"
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
