import { useEffect, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Header from "./components/Header";
import Tabs, { tabs, type TabId } from "./components/Tabs";
import AboutTab from "./components/AboutTab";
import ProjectsTab from "./components/ProjectsTab";
import ExperienceTab from "./components/ExperienceTab";
import ContactTab from "./components/ContactTab";
import { site } from "./data/site";
import { useTheme } from "./hooks/useTheme";

const panels: Record<TabId, ReactNode> = {
  about: <AboutTab />,
  projects: <ProjectsTab />,
  experience: <ExperienceTab />,
  contact: <ContactTab />,
};

const fromHash = (): TabId => {
  const h = window.location.hash.slice(1);
  return tabs.find((t) => t.id === h)?.id ?? "about";
};

export default function App() {
  const { dark, toggle } = useTheme();
  const [tab, setTab] = useState<TabId>(fromHash);

  useEffect(() => {
    const onHash = () => setTab(fromHash());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const select = (t: TabId) => {
    setTab(t);
    window.history.replaceState(null, "", `#${t}`);
  };

  return (
    <div className="mx-auto w-full max-w-[680px] px-6 pb-16 pt-12 md:pt-20">
      <Header dark={dark} onToggle={toggle} />
      <Tabs active={tab} onSelect={select} />
      <main className="mt-10 min-h-[60vh]">
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            role="tabpanel"
            id={`panel-${tab}`}
            aria-labelledby={`tab-${tab}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {panels[tab]}
          </motion.div>
        </AnimatePresence>
      </main>
      <footer className="mt-16 border-t border-dotted border-rule pt-6 text-[13px] text-graphite">© {new Date().getFullYear()} {site.name}</footer>
    </div>
  );
}
