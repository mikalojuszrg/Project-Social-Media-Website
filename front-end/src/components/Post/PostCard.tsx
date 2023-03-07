import { Post } from "../../types/posts";
import { formatDate } from "../../utils/formatDate";
import styles from "./PostCard.module.scss";

type Props = {
  post: Post;
};

const PostCard: React.FC<Props> = ({ post }) => {
  return (
    <div className={styles.container}>
      <p className={styles.container__name}>
        {post.first_name} {post.last_name}
      </p>
      <p>{post.content}</p>
      <p>{formatDate(post.date)}</p>
    </div>
  );
};

export default PostCard;
