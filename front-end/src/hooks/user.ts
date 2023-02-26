import { useMutation, useQuery } from "@tanstack/react-query";
import { createUser, fetchUser, loginUser } from "../api/user";

const USERS = "USERS";

export const useUsers = () => {
  return useQuery([USERS], fetchUser);
};

export const useCreateUser = () => {
  return useMutation(createUser);
};

export const useLoginUser = () => {
  return useMutation(loginUser);
};
