import { useState } from "react";

type NavPage = "home" | "resume" | "projects" | "about-me" | "fun";

type NavProps = {
  activePage: NavPage;
};

const navItems: Array<{ label: string; page: NavPage }> = [
  { label: "Home", page: "home" },
  { label: "Resume", page: "resume" },
  { label: "Projects", page: "projects" },
  { label: "About Me", page: "about-me" },
  { label: "Fun", page: "fun" },
];

function Nav({ activePage }: NavProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm sticky-top">
      <div className="container py-1">
        <a className="navbar-brand fw-semibold" href="#home">
          playon
        </a>

        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div
          className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}
          id="siteNav"
        >
          <ul className="navbar-nav mb-2 mb-lg-0 gap-lg-2">
            {navItems.map((item) => (
              <li className="nav-item" key={item.page}>
                <a
                  className={`nav-link px-lg-3 rounded-pill ${
                    activePage === item.page
                      ? "active bg-primary text-white"
                      : "text-light"
                  }`}
                  aria-current={activePage === item.page ? "page" : undefined}
                  href={`#${item.page}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export type { NavPage };
export default Nav;
