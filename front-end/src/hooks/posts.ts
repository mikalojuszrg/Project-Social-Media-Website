import { createPost, deletePost, fetchPost } from "../api/posts";
import { useMutation, useQuery } from "@tanstack/react-query";

const POSTS = "POSTS";

export const useCreatePost = () => {
  return useMutation(createPost);
};

export const usePosts = () => {
  return useQuery([POSTS], fetchPost);
};

export const useDeletePost = () => {
  return useMutation(deletePost);
};
