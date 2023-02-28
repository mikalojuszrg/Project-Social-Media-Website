import { useMutation, useQuery } from "@tanstack/react-query";
import { createPost, fetchPost } from "../api/posts";

const POSTS = "POSTS";

export const useCreatePost = () => {
  return useMutation(createPost);
};

export const usePosts = () => {
  return useQuery([POSTS], fetchPost);
};
