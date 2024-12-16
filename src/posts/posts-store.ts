import { create } from "zustand";
import { Post } from "./posts.types";

type PostsStore = {
  posts: Post[];
  filteredPosts: Post[];
  statusFilter: string;
  searchFilter: string;
  setPosts: (posts: Post[]) => void;
  setfilteredPosts: (filtered: Post[]) => void;
  setStatusFilter: (status: string) => void;
  setSearchFilter: (search: string) => void;
};

export const usePostsStore = create<PostsStore>((set) => ({
  posts: [],
  filteredPosts: [],
  statusFilter: "",
  searchFilter: "",
  setPosts: (posts) => set({ posts, filteredPosts: posts }),
  setfilteredPosts: (filtered) => set({ filteredPosts: filtered }),
  setStatusFilter: (status) => set({ statusFilter: status}),
  setSearchFilter: (search) => set({ searchFilter: search}),
}));
