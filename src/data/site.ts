import { readJson, readMarkdownCollection } from "@/data/content";

export type LinkStatus = "ready" | "placeholder";

export type Profile = {
  name: string;
  headline: string;
  intro: string;
  location: string;
  email: string;
  seeking: string;
};

export type NavItem = {
  label: string;
  href: string;
};

export type ProfileLink = {
  label: string;
  href: string;
  status: LinkStatus;
  note?: string;
  image?: string;
};

export type Stat = {
  value: string;
  label: string;
  note: string;
};

export type Project = {
  slug: string;
  order?: number;
  title: string;
  eyebrow: string;
  summary: string;
  role: string;
  results: string[];
  responsibilities: string[];
  reflection: string;
  next: string;
};

export type Work = {
  slug: string;
  order?: number;
  title: string;
  category: string;
  platform: string;
  date: string;
  cover?: string;
  coverMode?: "cover" | "contain";
  metrics: string[];
  url: string;
  status: LinkStatus;
  summary: string;
  reflection: string;
};

export type Proof = {
  title: string;
  image: string;
  note: string;
};

type ProjectContent = Omit<Project, "reflection">;
type WorkContent = Omit<Work, "reflection">;

export const profile = readJson<Profile>("settings/profile.json");
export const navItems = readJson<NavItem[]>("settings/nav-items.json");
export const stats = readJson<Stat[]>("settings/stats.json");
export const workCategories = readJson<string[]>("settings/work-categories.json");
export const links = readJson<ProfileLink[]>("settings/links.json");
export const proofs = readJson<Proof[]>("settings/proofs.json");
export const featuredWorkSlugs = readJson<string[]>("settings/featured-work-slugs.json");

export const projects: Project[] = readMarkdownCollection<ProjectContent>("projects").map(
  ({ body, ...project }) => ({
    ...project,
    reflection: body,
  }),
);

export const works: Work[] = readMarkdownCollection<WorkContent>("works").map(
  ({ body, ...work }) => ({
    ...work,
    reflection: body,
  }),
);
