import { useContext, useState } from "react";
import { useDeletePost, usePosts } from "../../hooks/posts";

import Button from "../Button/Button";
import { FaUserCircle } from "react-icons/fa";
import Loader from "../Loader/Loader";
import { Post } from "../../types/posts";
import { UserContext } from "../../contexts/UserContext";
import { formatDate } from "../../utils/formatDate";
import styles from "./PostCard.module.scss";

type Props = {
  post: Post;
};

const PostCard: React.FC<Props> = ({ post }) => {
  const { user } = useContext(UserContext);
  const { email } = user ?? {};
  const { mutateAsync: deletePost } = useDeletePost();
  const { refetch } = usePosts();
  const loggedUserPost = post.email === email;
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = async (id: number) => {
    setIsLoading(true);
    await deletePost(id);
    await refetch();
    setIsLoading(false);
  };

  return (
    <div className={styles.wrapper}>
      {isLoading && <Loader />}
      {!isLoading && (
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
      )}
    </div>
  );
};

export default PostCard;
