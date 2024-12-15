  import { Post } from "./posts.types";
  import { sleep } from "../utils";

  const LOCAL_STORAGE_KEY  = "posts";

  import { posts } from "./posts-data";

  const initializePosts = () => {
    const existingPosts = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!existingPosts) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(posts));
    }
  };

  //all posts
  export const getAllPosts = async () => {
    await sleep(2000);
    const posts = localStorage.getItem(LOCAL_STORAGE_KEY);
    return posts ? JSON.parse(posts) : [];
  };

  //post by ID
  export const getPost = async (id: number) => {
    await sleep(2000);
    const posts = await getAllPosts();
    return posts.find((post: Post) => post.id === id);
  };

  //add new post
  export const addPost = async (newPost: Post) => {
    await sleep(2000);
    const posts = await getAllPosts();
    posts.push(newPost);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(posts));
  };

  //remove post
  export const removePost = async (id: number) => {
    await sleep(2000);
    const posts = await getAllPosts();
    const updatedPosts = posts.map((post: Post) =>
      post.id === id ? { ...post, status: "deleted" } : post
    );
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedPosts));
  };

  initializePosts();
