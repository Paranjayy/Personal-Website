import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "company-1",
    companyName: "Company One",
    companyLogo: "https://placehold.co/64x64/png",
    positions: [
      {
        id: "00000000-0000-0000-0000-000000000001",
        title: "Role Title",
        employmentPeriod: { start: "01.2023" },
        employmentType: "Full-time",
        icon: "code",
        description:
          "- Brief responsibility one\n- Brief responsibility two\n- Brief responsibility three",
        skills: ["TypeScript", "Next.js", "Tailwind CSS"],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
  },
];
