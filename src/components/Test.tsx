import { useState } from "react";
import Download from "./Download";
import "./Test.css";

export interface TestDownload {
  fileUrl: string;
  fileName: string;
  buttonText?: string;
}

interface TestProps {
  title: string;
  difficulty: number;
  description: string;
  downloads: readonly TestDownload[];
}

const getDifficultyColor = (difficulty: number): string => {
  if (difficulty <= 1) return "#4bc8f1";
  if (difficulty <= 2) return "#73e95b";
  if (difficulty <= 3) return "rgb(253, 210, 92)";
  if (difficulty <= 4) return "#d33f3a";
  return "#940aa7";
};

function Test({ title, difficulty, description, downloads }: TestProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const clampeddifficulty = Math.min(5, Math.max(0, difficulty));
  const starColor = getDifficultyColor(clampeddifficulty);

  return (
    <article className={`test-card ${isExpanded ? "test-card--expanded" : ""}`}>
      {!isExpanded ? (
        <button
          type="button"
          className="test-card__collapsed"
          onClick={() => setIsExpanded(true)}
          aria-expanded={isExpanded}
        >
          <span className="test-card__title">{title}</span>
          <span className="test-card__prompt">Open test details</span>
        </button>
      ) : (
        <div className="test-card__expanded">
          <div className="test-card__header">
            <h2 className="test-card__expanded-title mb-0">{title}</h2>
            <button
              type="button"
              className="test-card__close"
              onClick={() => setIsExpanded(false)}
              aria-label={`Collapse ${title}`}
            >
              <span className="test-card__close-icon" aria-hidden="true">
                ×
              </span>
            </button>
          </div>

          <div className="test-card__difficulty-row">
            <span className="test-card__difficulty-label">Difficulty</span>
            <div
              className="test-card__stars"
              aria-label={`Difficulty difficulty ${clampeddifficulty} out of 5`}
            >
              {Array.from({ length: 5 }, (_, index) => {
                const filled = index < clampeddifficulty;
                return (
                  <span
                    key={index}
                    className={`test-card__star ${filled ? "test-card__star--filled" : ""}`}
                    style={filled ? { color: starColor } : undefined}
                    aria-hidden="true"
                  >
                    ★
                  </span>
                );
              })}
            </div>
          </div>

          <div className="test-card__description">
            <p className="mb-0">{description}</p>
          </div>

          <div className="test-card__downloads">
            {downloads.map((download, index) => (
              <Download key={`${download.fileName}-${index}`} {...download} />
            ))}
          </div>
        </div>
      )}
    </article>
  );
}

export default Test;
