import Button from "../Button/Button";
import { FaUserCircle } from "react-icons/fa";
import { Post } from "../../types/posts";
import { UserContext } from "../../contexts/UserContext";
import { formatDate } from "../../utils/formatDate";
import styles from "./PostCard.module.scss";
import { useContext } from "react";
import { useDeletePost } from "../../hooks/posts";

type Props = {
  post: Post;
};

const PostCard: React.FC<Props> = ({ post }) => {
  const { user } = useContext(UserContext);
  const { email } = user ?? {};
  const { mutateAsync: deletePost } = useDeletePost();
  const loggedUserPost = post.email === email;

  const handleDelete = async (id: number) => {
    await deletePost(id);
  };

  return (
    <div className={styles.container}>
      <div className={styles.container__title}>
        <FaUserCircle
          className={
            loggedUserPost
              ? styles.container__logged
              : styles.container__unlogged
          }
        />
        <p className={styles.container__name}>
          {post.first_name} {post.last_name}
        </p>
      </div>
      <p className={styles.container__content}>{post.content}</p>
      <p>{formatDate(post.date)}</p>
      <Button variant="primary" onClick={() => handleDelete(post.id)}>
        Delete
      </Button>
    </div>
  );
};

export default PostCard;
