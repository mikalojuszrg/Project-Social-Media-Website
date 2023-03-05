export type Post = {
  content: string;
  first_name: string;
  last_name: string;
  date: string;
  _id: unknown;
};

export type NewPost = Omit<Post, "_id">;
