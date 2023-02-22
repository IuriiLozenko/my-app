import { Post } from "../../slices/app.slice";

const apiServiceDef = () => {
  const baseUrl = "http://localhost:3001";
  const getPosts = async (): Promise<Post[]> => {
    try {
      const response = await fetch(`${baseUrl}/posts`);

      const data: Post[] = await response.json();
      return data;
    } catch (error) {
      console.log(error);
      return [];
    }
  };
  const getSinglePost = async (id: string): Promise<Post | null> => {
    try {
      const response = await fetch(`${baseUrl}/posts/${id}`);

      const data: Post = await response.json();
      return data;
    } catch (error) {
      console.log(error);
      return null;
    }
  };
  return {
    getPosts,
    getSinglePost,
  };
};
export const apiService = apiServiceDef();
