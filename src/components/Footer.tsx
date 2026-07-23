import "./Footer.css";

type FooterLink = {
  label: string;
  href: string;
  external?: boolean;
  description?: string;
};

type FooterSection = {
  title: string;
  links: FooterLink[];
  align?: "left" | "right";
};

type FooterProps = {
  sections?: FooterSection[];
  className?: string;
};

const defaultSections: FooterSection[] = [
  {
    title: "Pages",
    align: "left",
    links: [
      { label: "Home", href: "#home" },
      { label: "Resume", href: "#resume" },
      { label: "Projects", href: "#projects" },
      { label: "About Me", href: "#about-me" },
      { label: "Fun", href: "#fun" },
    ],
  },
  {
    title: "Connect",
    align: "right",
    links: [
      {
        label: "Email",
        href: "mailto:gsalles@andrew.cmu.edu",
        external: true,
      },
      {
        label: "Instagram",
        href: "https://www.instagram.com/gooey_gui_777/",
        external: true,
      },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/guilherme-salles-94a93031a/",
        external: true,
      },
      {
        label: "GitHub",
        href: "https://github.com/playon7",
        external: true,
      },
    ],
  },
];

function FooterSectionList({ title, links, align }: FooterSection) {
  return (
    <section
      className={`footer-section footer-section--${title.toLowerCase()} footer-section--${align ?? "left"}`}
    >
      <h2 className="footer-section__title">{title}</h2>
      <ul className="footer-section__list list-unstyled mb-0">
        {links.map((link) => (
          <li key={`${title}-${link.label}`} className="footer-section__item">
            <a
              className="footer-section__link"
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noreferrer noopener" : undefined}
              aria-label={link.description ?? link.label}
            >
              <span>{link.label}</span>
              {link.external ? (
                <span className="footer-section__arrow" aria-hidden="true">
                  ↗
                </span>
              ) : null}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Footer({ sections = defaultSections, className = "" }: FooterProps) {
  return (
    <footer className={`site-footer ${className}`.trim()}>
      <div className="site-footer__inner container">
        {/* <div className="site-footer__brand" aria-hidden="true">
          <p className="site-footer__eyebrow mb-0">PLAYON</p>
        </div> */}

        <div className="site-footer__content">
          <div className="site-footer__sections" aria-label="Footer links">
            {sections.map((section) => (
              <FooterSectionList key={section.title} {...section} />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export type { FooterLink, FooterSection, FooterProps };
export default Footer;
