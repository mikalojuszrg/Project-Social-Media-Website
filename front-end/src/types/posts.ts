export type Post = {
  content: string;
  first_name: string;
  last_name: string;
  date: string;
  _id: string;
  email: string;
  id: number;
  image: any;
};

export type NewPost = Omit<Post, "_id">;
