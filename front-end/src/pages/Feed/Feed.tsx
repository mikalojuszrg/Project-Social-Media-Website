import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import PostForm from "../../components/PostForm/PostForm";
import TimeLine from "../../components/Timeline/TimeLine";
import { UserContext } from "../../contexts/UserContext";
import { HOME_PATH } from "../../routes/const";

const Feed = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const { first_name, last_name } = user ?? {};

  user === null && navigate(HOME_PATH);

  console.log(user);

  return (
    <div>
      {first_name} {last_name}
      <PostForm />
      <TimeLine />
    </div>
  );
};

export default Feed;
