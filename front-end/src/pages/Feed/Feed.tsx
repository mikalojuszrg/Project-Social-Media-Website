import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useUsers } from "../../hooks/user";

const Feed = () => {
  const { user } = useContext(UserContext);

  console.log(user);
  const { data } = useUsers();
  const users = data || [];

  console.log(users);

  return <div></div>;
};

export default Feed;
