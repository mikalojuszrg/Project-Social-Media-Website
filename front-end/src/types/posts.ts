export type Post = {
  content: string;
  first_name: string;
  last_name: string;
  date: string;
  _id: string;
  email: string;
  id: number;
};

export type NewPost = Omit<Post, "_id">;
