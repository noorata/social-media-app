import { Post } from "./posts.types";

export const posts: Post[] = [
  {
    id: 1,
    title: "React",
    description: "Learn how to use React Context API.",
    dateCreated: "2023-12-01T12:34:00Z",
    status: "published",
    likes: 1125,
    comments: 348,
    author: "Alex Guerrero",
    authorImg: "https://randomuser.me/api/portraits/men/1.jpg",
    img: "https://images.unsplash.com/photo-1734275689167-5f458aacde63?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["#React", "#ContextAPI", "#Frontend"],
    content:
    `React Context API is a powerful tool that helps developers manage global state in React applications. In this article, we cover:
      1. How to create a Context.
      2. How to use Context.Provider and Context.Consumer.
      3. How to simplify state management using custom hooks.
    `,
  },
  {
    id: 2,
    title: "TypeScript",
    description: "Transitioning from JavaScript to TypeScript.",
    dateCreated: "2023-12-02T14:22:00Z",
    status: "draft",
    likes: 1024,
    comments: 348,
    author: "Edward Kelly",
    authorImg: "https://randomuser.me/api/portraits/men/2.jpg",
    img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    tags: ["#TypeScript", "#JavaScript", "#Development"],
    content:`
      Switching to TypeScript can be a game changer for JavaScript developers. Learn:
      1. How to add TypeScript to an existing project.
      2. Key differences between TypeScript and JavaScript.
      3. Tips for writing type-safe code without overcomplicating your project.
    `,
  },
  {
    id: 3,
    title: "TypeScript",
    description: "Transitioning from JavaScript to TypeScript.",
    dateCreated: "2023-12-02T14:22:00Z",
    status: "published",
    likes: 1024,
    comments: 348,
    author: "Edward Kelly",
    authorImg: "https://randomuser.me/api/portraits/men/2.jpg",
    img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    tags: ["#TypeScript", "#JavaScript", "#Development"],
    content:`
      Switching to TypeScript can be a game changer for JavaScript developers. Learn:
      1. How to add TypeScript to an existing project.
      2. Key differences between TypeScript and JavaScript.
      3. Tips for writing type-safe code without overcomplicating your project.
    `,
  },
  {
    id: 4,
    title: "React Hooks",
    description: "Learn how to use React Hooks.",
    dateCreated: "2024-12-01T12:34:00Z",
    status: "published",
    likes: 1125,
    comments: 348,
    author: "Rand Ata",
    authorImg: "https://randomuser.me/api/portraits/men/1.jpg",
    img: "https://images.unsplash.com/photo-1734275689167-5f458aacde63?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["#React", "#ContextAPI", "#Frontend"],
    content:
    `Discover how to manage global state in React using hooks:
      1. Use the useContext hook for state access.
      2. Share state with Context.Provider.
      3. Simplify state management with custom hooks.
    `,
  },
];
for (let i = 5; i <= 200; i++) {
  posts.push({
    id: i,
    title: `Post ${i}`,
    description: `This is the description for post ${i}.`,
    dateCreated: new Date().toISOString(),
    status: "published",
    likes: Math.floor(Math.random() * 1000),
    comments: Math.floor(Math.random() * 500),
    author: `Author ${i}`,
    authorImg: "https://randomuser.me/api/portraits/men/1.jpg",
    img: "https://via.placeholder.com/600",
    tags: [`#Tag${i}`, `#React`],
    content: `This is the content for post ${i}.`,
  });
}

