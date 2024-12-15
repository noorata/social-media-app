import { create } from "zustand";
import { Post } from "./posts.types";

type PostsStore = {
  posts: Post[];
  filteredTransactions: Post[];
  statusFilter: string;
  searchFilter: string;
  setPosts: (posts: Post[]) => void;
  setStatusFilter: (status: string) => void;
  setSearchFilter: (search: string) => void;
};

export const usePostsStore = create<PostsStore>((set, get) => ({
  posts: [],
  filteredTransactions: [],
  statusFilter: "",
  searchFilter: "",
  setPosts: (posts) => set({ posts, filteredTransactions: posts }),
  setStatusFilter: (status) => {
    const { posts, searchFilter } = get();
    const searchLower = searchFilter.toLowerCase();
    const filtered = posts.filter(
      (post) =>
        (status ? post.status === status : true) &&
        (searchLower
          ? post.title.toLowerCase().includes(searchLower) ||
            post.tags.some((tag) => tag.toLowerCase().includes(searchLower))
          : true)
    );
    set({ statusFilter: status, filteredTransactions: filtered });
  },
  setSearchFilter: (search) => {
    const { posts, statusFilter } = get();
    const searchLower = search.toLowerCase();
    const filtered = posts.filter(
      (post) =>
        (statusFilter ? post.status === statusFilter : true) &&
        (searchLower
          ? post.title.toLowerCase().includes(searchLower) ||
            post.tags.some((tag) => tag.toLowerCase().includes(searchLower))
          : true)
    );
    set({ searchFilter: search, filteredTransactions: filtered });
  },
}));
