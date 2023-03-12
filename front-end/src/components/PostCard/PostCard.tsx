import { useContext, useState } from "react";
import { useDeletePost, usePosts } from "../../hooks/posts";

import { AiOutlineDelete } from "react-icons/ai";
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
            {loggedUserPost && (
              <AiOutlineDelete
                className={styles.container__deletebtn}
                onClick={() => handleDelete(post.id)}
              />
            )}
          </div>
          <p className={styles.container__content}>{post.content}</p>
          <p>{formatDate(post.date)}</p>
        </div>
      )}
    </div>
  );
};

export default PostCard;
