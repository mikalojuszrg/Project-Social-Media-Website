import { useMutation } from "@tanstack/react-query";
import { createPost } from "../api/posts";

export const useCreatePost = () => {
  return useMutation(createPost);
};
