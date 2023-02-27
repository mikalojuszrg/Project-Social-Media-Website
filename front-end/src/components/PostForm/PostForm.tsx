import { Formik, Form, Field } from "formik";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useCreatePost } from "../../hooks/posts";
import { Post } from "../../types/posts";
import Button from "../Button/Button";

const PostForm = () => {
  const { user } = useContext(UserContext);
  const { first_name = "", last_name = "" } = user ?? {};
  const { mutateAsync: createPost } = useCreatePost();
  const handleSubmit = (values: Post) => {
    createPost(values);
  };

  return (
    <div>
      <Formik
        initialValues={{
          content: "",
          first_name: first_name,
          last_name: last_name,
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
