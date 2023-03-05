import { Post } from "../types/posts";

export const reverseArray = (arr: Post[]) => {
  return [...arr].reverse();
};
