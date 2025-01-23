import { LoaderFunction } from "@remix-run/node";
import { fetchPosts } from "~/services/jsonplaceholder/jsonplaceholder.service";

export const loader: LoaderFunction = async () => {
  try {
    const posts = await fetchPosts();
    return { posts };
  } catch (error) {
    return error;
  }
};
