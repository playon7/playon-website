import { useEffect, useState } from "react";
import Nav, { type NavPage } from "./components/Nav";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Project1 from "./pages/Project1";
import Fun from "./pages/Fun";
import AnimeReviews from "./pages/AnimeReviews";
import GameReviews from "./pages/GameReviews";
import Resume from "./pages/Resume";
import AboutMe from "./pages/AboutMe";
import Footer from "./components/Footer";

const ROUTES = {
  home: { Component: Home, navKey: "home" },
  projects: { Component: Projects, navKey: "projects" },
  project1: { Component: Project1, navKey: "projects" },
  fun: { Component: Fun, navKey: "fun" },
  "anime-reviews": { Component: AnimeReviews, navKey: "fun" },
  "game-reviews": { Component: GameReviews, navKey: "fun" },
  resume: { Component: Resume, navKey: "resume" },
  "about-me": { Component: AboutMe, navKey: "about-me" },
} as const;

type AppPage = keyof typeof ROUTES;

function App() {
  const [activePage, setActivePage] = useState<AppPage>("home");

  useEffect(() => {
    const syncPageFromHash = () => {
      const hash = window.location.hash.replace("#", "") as AppPage;

      if (hash in ROUTES) {
        setActivePage(hash as AppPage);
      } else {
        setActivePage("home");
      }
    };

    syncPageFromHash();
    window.addEventListener("hashchange", syncPageFromHash);

    return () => window.removeEventListener("hashchange", syncPageFromHash);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("home", activePage === "home");

    return () => {
      document.body.classList.remove("home");
    };
  }, [activePage]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [activePage]);

  const navigateTo = (page: string) => {
    window.location.hash = page;
    setActivePage(page as AppPage);
  };

  const { Component, navKey } = ROUTES[activePage] || ROUTES["home"];

  return (
    <div className="app-shell min-vh-100">
      <Nav activePage={navKey as NavPage} />
      <Component onNavigate={navigateTo} />
      <Footer />
    </div>
  );
}

export default App;
