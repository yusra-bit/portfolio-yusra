export type Category = "freelance" | "agency" | "community";
export interface Project {
  id: string;
  title: string;
  url?: string;
  category: Category;
  type: "Design & Development" | "Redesign" | "Website Design" | "Side project";
  industry: string;
}
export type IconKey = "search" | "mail" | "globe" | "server" | "shield" | "wrench";
/** `logo` is a Simple Icons slug (https://simpleicons.org); `icon` is a fallback for skills with no brand logo. */
export interface SkillItem { name: string; logo?: string; icon?: IconKey; invertDark?: boolean }
export interface ExpertiseGroup { title: string; items: SkillItem[] }
export interface ExperienceItem { role: string; org: string; period: string; summary: string }
