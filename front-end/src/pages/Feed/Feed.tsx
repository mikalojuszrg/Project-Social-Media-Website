import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import PostForm from "../../components/PostForm/PostForm";
import { UserContext } from "../../contexts/UserContext";
import { useUsers } from "../../hooks/user";
import { HOME_PATH } from "../../routes/const";

const Feed = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const { first_name, last_name } = user ?? {};

  console.log(user);
  const { data } = useUsers();
  const users = data || [];

  !user && navigate(HOME_PATH);

  console.log(users);

  return (
    <div>
      {first_name} {last_name}
      <PostForm />
    </div>
  );
};

export default Feed;
