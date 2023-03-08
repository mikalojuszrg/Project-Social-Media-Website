import { NewPost, Post } from "../types/posts";

import axios from "axios";

const POSTS_API_URL = "http://localhost:5000/posts";

export const createPost = async (post: NewPost): Promise<Post> => {
  const response = await axios.post(POSTS_API_URL, post);
  return response.data;
};

export const fetchPost = async (): Promise<Post[]> => {
  const response = await axios.get(POSTS_API_URL);
  return response.data;
};

export const deletePost = async (id: number): Promise<Post> => {
  const response = await axios.delete(`${POSTS_API_URL}/${id}`);
  return response.data;
};
