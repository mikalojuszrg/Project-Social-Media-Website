import Loader from "../Loader/Loader";
import { Post } from "../../types/posts";
import PostCard from "../PostCard/PostCard";
import { reverseArray } from "../../utils/reverseArray";
import styles from "./Timeline.module.scss";
import { usePosts } from "../../hooks/posts";

const TimeLine = () => {
  const { data, isLoading } = usePosts();
  const posts = data || [];

  const reversedPosts = reverseArray(posts);

  return (
    <div className={styles.container}>
      {isLoading ? (
        <Loader />
      ) : (
        reversedPosts.map((post: Post) => (
          <PostCard post={post} key={post.date} />
        ))
      )}
    </div>
  );
};

export default TimeLine;
