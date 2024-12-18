export interface Post {
    id: number;
    title: string;
    description: string;
    dateCreated: string;
    status: "draft" | "published" | "deleted";
    likes: number;
    comments: number;
    author: string;
    authorImg: string;
    img: string;
    tags: string[];
    content: string;
  }
  
  export enum PostStatusesEnum {
    DRAFT = "draft",
    PUBLISHED = "published",
    DELETED = "deleted",
  }
  