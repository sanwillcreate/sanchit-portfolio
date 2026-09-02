export type ProjectCategory = "Web" | "AI" | "Web3" ;

export type Project = {
  slug: string;
  title: string;
  description: string;
  stack: string[];
  categories: ProjectCategory[];
  year: string;

  // Deployed project
  href?: string;

  // GitHub repository
  repo?: string;
};

export const projects: Project[] = [
  {
    slug: "impersol",
    title: "Impersol",
    description:
      "a solana wallet adapter that lets you make real transactions on devnet.",
    stack: ["Solana", "Web3.js", "React", "Vite"],
    categories: ["Web3"],
    year: "2026",
    href: "https://impersol-two.vercel.app/",
    repo: "https://github.com/sanwillcreate/impersolv2",
  },

  {
    slug: "the-crease",
    title: "The Crease",
    description:
      "A React app backed by Python and Supabase,lets you build your playing xi and rates it with a rating system well integrated without any api integrations.",
    stack: ["Python", "React", "Supabase"],
    categories: ["Web"],
    year: "2026",
    href: "https://thecrease-zeta.vercel.app/",
    repo: "https://github.com/sanwillcreate/thecrease",
  },

  {
    slug: "bhais-cap",
    title: "Bhai's Cap",
    description:
      "A Next.js app that generates you real salman khan style captions based on the image you provide",
    stack: ["TypeScript", "Next.js" ],
    categories: ["AI", "Web"],
    year: "2026",
    href: "https://bhai-s-cap.vercel.app/",
    repo: "https://github.com/sanwillcreate/BHai-s-cap",
  },

  {
    slug: "ironmind",
    title: "IronMind",
    description:
      "AI fitness coach pairing Cognee's memory layer with api integration to explore how agents retain and use context.",
    stack: ["Python", "Cognee"],
    categories: ["AI"],
    year: "2026",
    repo: "https://github.com/sanwillcreate/IronMind",
  },
];

export const filters: ("All" | ProjectCategory)[] = [
  "All",
  "Web",
  "AI",
  "Web3",
];