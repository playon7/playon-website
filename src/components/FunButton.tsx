import "./FunButton.css";
type FunButtonDestination = "anime-reviews" | "game-reviews";

type FunButtonProps = {
  text: string;
  to: FunButtonDestination;
  backgroundImage: string;
  onNavigate: (page: FunButtonDestination) => void;
};

import { useState } from "react";

function FunButton({ text, to, backgroundImage, onNavigate }: FunButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      type="button"
      className="btn btn-dark fun-button w-100 p-0 overflow-hidden rounded-4 shadow-sm border-0 text-start"
      onClick={() => onNavigate(to)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        minHeight: "180px",
        transform: isHovered ? "translateY(-8px)" : "translateY(0)",
        transition: "transform 350ms ease, box-shadow 350ms ease",
      }}
    >
      <span
        aria-hidden="true"
        className="fun-button__layer fun-button__layer--base"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.8)), url(${backgroundImage})`,
        }}
      />
      <span
        aria-hidden="true"
        className="fun-button__layer fun-button__layer--hover"
        style={{
          opacity: isHovered ? 1 : 0,
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.6)), url(${backgroundImage})`,
        }}
      />
      <span className="position-relative z-1 d-flex h-100 w-100 align-items-center justify-content-center p-4 text-center">
        <span className="fs-2 fw-semibold text-white">{text}</span>
      </span>
    </button>
  );
}

export default FunButton;
