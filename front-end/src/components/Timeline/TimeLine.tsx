import Loader from "../Loader/Loader";
import { Post } from "../../types/posts";
import { reverseArray } from "../../utils/reverseArray";
import styles from "./Timeline.module.scss";
import { usePosts } from "../../hooks/posts";

const TimeLine = () => {
  const { data, isLoading } = usePosts();
  const posts = data || [];

  const reversedPosts = reverseArray(posts);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        reversedPosts.map((post: Post) => (
          <div>
            <p>{post.content}</p>
            <p>{post.date}</p>
            <p>
              {post.first_name} {post.last_name}
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default TimeLine;
