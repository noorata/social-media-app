  import { Post } from "./posts.types";
  import { sleep } from "../utils";

  const localStorageKey = "posts";

  import { posts } from "./posts-data";

  const initializePosts = () => {
    const existingPosts = localStorage.getItem(localStorageKey);
    if (!existingPosts) {
      localStorage.setItem(localStorageKey, JSON.stringify(posts));
    }
  };

  //all posts
  export const getAllPosts = async (): Promise<Post[]> => {
    await sleep(2000);
    const posts = localStorage.getItem(localStorageKey);
    return posts ? JSON.parse(posts) : [];
  };

  //post by ID
  export const getPost = async (id: number): Promise<Post | undefined> => {
    await sleep(2000);
    const posts = await getAllPosts();
    return posts.find((post) => post.id === id);
  };

  //add new post
  export const addPost = async (newPost: Post): Promise<void> => {
    await sleep(2000);
    const posts = await getAllPosts();
    posts.push(newPost);
    localStorage.setItem(localStorageKey, JSON.stringify(posts));
  };

  //remove post
  export const removePost = async (id: number): Promise<void> => {
    await sleep(2000);
    const posts = await getAllPosts();
    const updatedPosts = posts.map((post) =>
      post.id === id ? { ...post, status: "deleted" } : post
    );
    localStorage.setItem(localStorageKey, JSON.stringify(updatedPosts));
  };

  initializePosts();
