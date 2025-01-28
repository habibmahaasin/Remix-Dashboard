import { LoaderFunction, json } from "@remix-run/node";
import { fetchPosts } from "~/services/jsonplaceholder/jsonplaceholder.service";

export const loader: LoaderFunction = async () => {
  try {
    const posts = await fetchPosts();
    return json({ posts });
  } catch (error) {
    return json(
      { error: "Failed to fetch posts", details: error || error },
      { status: 500 }
    );
  }
};
