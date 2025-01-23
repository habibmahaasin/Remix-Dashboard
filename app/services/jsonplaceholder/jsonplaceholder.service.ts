import { apiClient, handleApiError } from "../base/apiClient";
import { IComment, IPost } from "./types";

export const fetchPosts = async (): Promise<IPost[]> => {
  try {
    const response = await apiClient.get<IPost[]>("/posts");
    return response.data;
  } catch (error) {
    handleApiError(error);
    return [];
  }
};

export const fetchPostById = async (
  id: string | number
): Promise<IPost | null> => {
  try {
    const response = await apiClient.get<IPost>(`/posts/${id}`);
    return response.data;
  } catch (error) {
    handleApiError(error);
    return null;
  }
};

export const fetchCommentsByPostId = async (
  postId: string | number
): Promise<IComment[]> => {
  try {
    const response = await apiClient.get<IComment[]>(
      `/posts/${postId}/comments`
    );
    return response.data;
  } catch (error) {
    handleApiError(error);
    return [];
  }
};
