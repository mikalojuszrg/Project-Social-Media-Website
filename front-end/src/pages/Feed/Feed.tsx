import { useContext, useEffect } from "react";

import { HOME_PATH } from "../../routes/const";
import PostForm from "../../components/PostForm/PostForm";
import TimeLine from "../../components/Timeline/TimeLine";
import { UserContext } from "../../contexts/UserContext";
import styles from "./Feed.module.scss";
import { useNavigate } from "react-router-dom";

const Feed = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (user === null) {
      return navigate(HOME_PATH);
    }
  }, [user, navigate]);

  return (
    <main className={styles.container}>
      <PostForm />
      <TimeLine />
    </main>
  );
};

export default Feed;
