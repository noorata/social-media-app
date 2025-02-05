  import { Post, PostStatusesEnum  } from "./posts.types";
  import { sleep } from "../utils";

  const LOCAL_STORAGE_KEY  = "posts";

  import { posts } from "./posts-data";

  const initializePosts = () => {
    const existingPosts = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!existingPosts) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(posts));
    }
  };

  export const getPublishedPosts = async () => {
    await sleep(500);
    const storedPosts = localStorage.getItem(LOCAL_STORAGE_KEY);
    const posts: Post[] = storedPosts ? JSON.parse(storedPosts) : [];
    return posts.filter((post) => post.status === PostStatusesEnum.PUBLISHED);
  };

  export const getPublishedPostsPaginated = async (page: number, limit: number) => {
    await sleep(500);
  
    const storedPosts = localStorage.getItem(LOCAL_STORAGE_KEY);
    const allPosts: Post[] = storedPosts ? JSON.parse(storedPosts) : [];
  
    const publishedPosts = allPosts.filter(
      (post) => post.status === PostStatusesEnum.PUBLISHED
    );
  
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
  
    const pagePosts = publishedPosts.slice(startIndex, endIndex);
    const hasMore = endIndex < publishedPosts.length;
  
    return { data: pagePosts, hasMore };
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
    const posts = localStorage.getItem(LOCAL_STORAGE_KEY);
    const parsedPosts: Post[] = posts ? JSON.parse(posts) : [];
    return parsedPosts.find((post) => post.id === id);
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
