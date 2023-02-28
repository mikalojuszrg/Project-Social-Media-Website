import { usePosts } from "../../hooks/posts";
import styles from "./Timeline.module.scss";

const TimeLine = () => {
  const { data } = usePosts();
  const posts = data || [];

  return (
    <div>
      {posts.map((post) => (
        <div>
          <p>{post.content}</p>
          <p>{post.date}</p>
          <p>
            {post.first_name} {post.last_name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default TimeLine;
