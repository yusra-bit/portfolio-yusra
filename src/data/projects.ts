import type { Project } from "../types";

// Single source of truth for the Projects tab.
export const projects: Project[] = [
  { id: "bilad-tech", title: "Bilad Tech", url: "https://biladtech.com/", category: "freelance", type: "Design & Development", industry: "Technology",  },
  { id: "papaya", title: "Papaya Communications", url: "https://papaya-redesign.vercel.app/", category: "freelance", type: "Design & Development", industry: "Communications",  },
  { id: "sswe", title: "Society of Somali Women Engineers", url: "https://somali-eng-connect-565b5512.vercel.app/", category: "freelance", type: "Design & Development", industry: "Engineering community",  },
  { id: "crop", title: "Crop Productivity Increase", url: "https://teams-sublime-site-167921.webflow.io/", category: "freelance", type: "Redesign", industry: "Agribusiness",  },
  { id: "irada", title: "IRADA Consulting", url: "https://iradaconsulting.org/", category: "agency", type: "Website Design", industry: "Consulting",  },
  { id: "timeout", title: "Timeout Hargeisa", url: "https://timeouthargeisa.com/", category: "agency", type: "Website Design", industry: "Restaurant",  },
  { id: "one4seven", title: "One4Seven Restaurant", url: "https://www.one4sevenrestaurant.com/", category: "agency", type: "Website Design", industry: "Restaurant", },
  { id: "blood-bank", title: "Blood Bank System", category: "community", type: "Side project", industry: "Community", },
];
