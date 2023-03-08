import { Post } from "../../types/posts";
import { UserContext } from "../../contexts/UserContext";
import { formatDate } from "../../utils/formatDate";
import styles from "./PostCard.module.scss";
import { useContext } from "react";

type Props = {
  post: Post;
};

const PostCard: React.FC<Props> = ({ post }) => {
  const { user } = useContext(UserContext);
  const { email } = user ?? {};

  const loggedUserPost = post.email === email;

  return (
    <div className={loggedUserPost ? styles.container : styles.con}>
      <p className={styles.container__name}>
        {post.first_name} {post.last_name}
      </p>
      <p>{post.content}</p>
      <p>{formatDate(post.date)}</p>
    </div>
  );
};

export default PostCard;
