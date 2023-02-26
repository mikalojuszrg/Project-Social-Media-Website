import { useUsers } from "../../hooks/user";

const Feed = () => {
  const { data } = useUsers();
  const users = data || [];

  console.log(users);

  return <div>Feed</div>;
};

export default Feed;
