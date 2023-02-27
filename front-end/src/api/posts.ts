import axios from "axios";
import { Post } from "../types/posts";

const POSTS_API_URL = "http://localhost:5000/posts";

export const createPost = async (post: Post): Promise<Post> => {
  const response = await axios.post(POSTS_API_URL, post);
  return response.data;
};
