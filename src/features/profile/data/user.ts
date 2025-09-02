import type { User } from "@/features/profile/types/user";

export const USER: User = {
  firstName: "Paranjay",
  lastName: "Khachar",
  displayName: "Paranjay Khachar",
  username: "paranjayy",
  gender: "male",
  pronouns: "he/him",
  dateOfBirth: "2005-12-24",
  bio: "Design + code. Building useful things.",
  flipSentences: [
    "Building things with care.",
    "Design Engineer",
    "Open Source Enthusiast",
  ],
  address: "India",
  phoneNumber: "KzEyMzQ1Njc4OTA=", // +1234567890 (base64)
  email: "aGVsbG9AZXhhbXBsZS5jb20=", // hello@example.com (base64)
  website: "https://paranjay.dev",
  jobTitle: "Design Engineer",
  jobs: [
    {
      title: "Senior Frontend Developer & UI Design Lead",
      company: "Company Name",
      website: "Company Website",
    },
    {
      title: "Founder",
      company: "Company Name",
      website: "Company Website",
    },
  ],
  about: `
Hello, World! I'm a Design Engineer passionate about creating high‑performance, user‑centric software with intuitive, engaging design.

This starter template showcases a minimal portfolio, component registry, and blog. Replace this copy with your own story.

Let's connect and build something great.
  `,
  avatar: "/pfp.jpeg",
  ogImage: "https://placehold.co/1200x630/png",
  namePronunciationUrl: "",
  keywords: [
    "portfolio",
    "blog",
    "components",
    "next.js",
    "tailwindcss",
  ],
  dateCreated: "2025-09-03", // YYYY-MM-DD
};
