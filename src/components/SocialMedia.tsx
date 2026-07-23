import React from "react";
import { FaEnvelope, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import "./SocialMedia.css"; // Ensure this matches your file path

const SocialMedia: React.FC = () => {
  return (
    <div className="social-media-container">
      {/* Hidden SVG to define the gradient for the hover state */}
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <linearGradient id="space-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop stopColor="var(--space-rose)" offset="0%" />
          <stop stopColor="var(--space-lavender)" offset="100%" />
        </linearGradient>
      </svg>

      {/* Email */}
      <a
        href="mailto:gsalles@andrew.cmu.edu"
        className="social-icon-link"
        aria-label="Email"
      >
        <FaEnvelope />
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/gooey_gui_777/"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon-link"
        aria-label="Instagram"
      >
        <FaInstagram />
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/guilherme-salles-94a93031a/"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon-link"
        aria-label="LinkedIn"
      >
        <FaLinkedin />
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/playon7"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon-link"
        aria-label="GitHub"
      >
        <FaGithub />
      </a>
    </div>
  );
};

export default SocialMedia;
