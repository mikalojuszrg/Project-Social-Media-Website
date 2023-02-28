import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import PostForm from "../../components/PostForm/PostForm";
import { UserContext } from "../../contexts/UserContext";
import { usePosts } from "../../hooks/posts";
import { HOME_PATH } from "../../routes/const";

const Feed = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const { first_name, last_name } = user ?? {};

  const { data } = usePosts();
  const posts = data || [];

  !user && navigate(HOME_PATH);

  return (
    <div>
      {first_name} {last_name}
      <PostForm />
    </div>
  );
};

export default Feed;
