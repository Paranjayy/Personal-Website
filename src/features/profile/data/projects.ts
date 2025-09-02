import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    id: "example-project",
    title: "Example Project",
    period: { start: "01.2025" },
    link: "https://example.com",
    skills: ["Next.js", "TypeScript", "Tailwind CSS"],
    description: `Replace this with a short description of your project.
- Key feature one
- Key feature two
- Key feature three`,
    logo: "https://placehold.co/64x64/png",
    isExpanded: true,
  },
];
