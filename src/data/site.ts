import type { ExpertiseGroup, ExperienceItem } from "../types";

export const site = {
  name: "Yusra Ahmed Abdi",
  title: "Web Developer & Digital Solutions Specialist",
  location: "Hargeisa, Somaliland",
  email: "yusra.abdi999@gmail.com",
  phone: "+252 63 7196599",
  phoneHref: "tel:+252637196599",
  linkedin: "https://www.linkedin.com/in/yusra-ahmed-14541b209/",
};

export const tagline = "I design and build digital experiences that help businesses grow.";

export const about = [
  "My background is in tech. I studied Software Engineering at Abaarso Tech University, where I built a foundation in web development and databases with tools like PHP, MySQL, JavaScript and React. I enjoy the space where design and engineering meet.",
  "My career started with an internship at Sifalo, where I helped build and test a hotel management system and Sifalo Pay. I then joined Vision Creative Agency, working on WordPress and Webflow websites, SEO, email marketing and Google Business Profiles for several clients. Since November 2025 I have switched to freelancing, which lets me work directly with clients from the first idea to a site that is live and well maintained.",
  "Outside client work, I enjoy writing and reading, and I take on side projects that help my community, such as a blood bank system. I like learning new things all the time, and lately that means exploring AI tools and finding practical ways to use them.",
];

export const education = { degree: "BSc Software Engineering", school: "Abaarso Tech University" };

export const expertise: ExpertiseGroup[] = [
  { title: "Website Development", items: [
    { name: "JavaScript", logo: "javascript" }, { name: "TypeScript", logo: "typescript" }, { name: "React", logo: "react" },
    { name: "Node.js", logo: "nodedotjs" }, { name: "PHP", logo: "php" }, { name: "MySQL", logo: "mysql" },
    { name: "MongoDB", logo: "mongodb" }, { name: "Bootstrap", logo: "bootstrap" }, { name: "Tailwind CSS", logo: "tailwindcss" }] },
  { title: "CMS & E-commerce", items: [{ name: "WordPress", logo: "wordpress" }, { name: "Webflow", logo: "webflow" }, { name: "WooCommerce", logo: "woocommerce" }] },
  { title: "SEO & Digital Presence", items: [{ name: "SEO", icon: "search" }, { name: "Google Business Profile", logo: "googlemybusiness" }] },
  { title: "Digital Marketing", items: [{ name: "Google Ads", logo: "googleads" }, { name: "Meta Ads", logo: "meta" }, { name: "Email marketing", icon: "mail" }, { name: "Mailchimp", logo: "mailchimp" }] },
  { title: "Design Tools", items: [{ name: "Figma", logo: "figma" }, { name: "Canva", logo: "canva" }] },
  { title: "Tools & Technologies", items: [
    { name: "Domain registration", icon: "globe" }, { name: "Web hosting", icon: "server" }, { name: "DNS & SSL", icon: "shield" },
    { name: "Backups & maintenance", icon: "wrench" }, { name: "Git", logo: "git" }, { name: "GitHub", logo: "github", invertDark: true }] },
];

// Summarised from Yusra's CV.
export const experience: ExperienceItem[] = [
  { role: "Freelance Web Developer & Digital Systems Support", org: "Self-employed", period: "Nov 2025 – Present", summary: "Building and maintaining websites and systems for clients with WordPress, Webflow, PHP and MySQL, and supporting their content and digital workflows.  Supporting clients with optimizing existing websites." },
  { role: "Digital Marketing Specialist / Web Developer", org: "Vision Creative Agency", period: "Jan 2024 – Nov 2025", summary: "Built and maintained WordPress and Webflow sites for multiple clients, and handled SEO, email marketing, Google Business Profiles and technical support." },
  { role: "Software Engineer Intern", org: "Sifalo", period: "May 2024 – Aug 2024", summary: "Helped build and test a Hotel Management System and Sifalo Pay using PHP and MySQL, and maintained the technical documentation, collabrating with senior developers" },
];
