import React, { useState, useMemo, useEffect } from "react";
import "./Review.css";

// --- Types ---
interface AspectScore {
  name: string;
  score: number;
}

interface ReviewProps {
  title: string;
  imageUrl: string;
  aspects: AspectScore[];
  reviewText: string;
}

// --- Helper Function ---
const getScoreColor = (score: number): string => {
  if (score <= 1.9) return "linear-gradient(135deg, #9381ff, #8a0bbd)"; // Purple
  if (score <= 2.9) return "linear-gradient(135deg, #df8eff, #c51aa9)"; // Pink
  if (score <= 3.9) return "linear-gradient(135deg, #ff1100, #5a0909)"; // Dark Red
  if (score <= 4.9) return "linear-gradient(135deg, #fd51a7, #e71919)"; // Red
  if (score <= 5.9) return "linear-gradient(135deg, #f3d77a, #f09348)"; // Orange
  if (score <= 6.9) return "linear-gradient(135deg, #f1fa7a, #e6c019)"; // Yellow
  if (score <= 7.9) return "linear-gradient(135deg, #adf37e, #93df18)"; // Light Green
  if (score <= 8.9) return "linear-gradient(135deg, #51f859, #21c07e)"; // Green
  if (score <= 9.5) return "linear-gradient(135deg, #3ec053, #036168)"; // Dark Green
  return "linear-gradient(135deg, #4bc8f1, #045aca)"; // Blue
};

// --- Modular Progress Bar Component ---
const ProgressBar: React.FC<{
  title: string;
  score: number;
  isMain?: boolean;
}> = ({ title, score, isMain = false }) => {
  const clampedScore = Math.min(score, 10);
  const targetPercentage = (clampedScore / 10) * 100;
  const barColor = getScoreColor(clampedScore);
  const displayScore = clampedScore.toFixed(1);
  const [animatedWidth, setAnimatedWidth] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setAnimatedWidth(targetPercentage);
    }, 50);

    return () => clearTimeout(timeoutId);
  }, [targetPercentage]);

  return (
    <div
      className={`progress-wrapper ${isMain ? "progress-main" : "progress-sub"}`}
    >
      <div className="mb-2">
        <span
          className="progress-title fw-bold"
          style={{ color: "var(--space-text)" }}
        >
          {title}
        </span>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          gap: "1rem",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            minWidth: "95px",

            background: barColor,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          <span
            style={{
              fontSize: "2.8rem",
              fontWeight: "700",
              lineHeight: "0.8",
              letterSpacing: "-2px",
            }}
          >
            {displayScore}
          </span>
          <span
            style={{
              fontSize: "0.9rem",
              fontWeight: "700",
              color: "var(--space-muted)",
              marginLeft: "4px",
            }}
          >
            /10
          </span>
        </div>

        <div
          className="progress custom-progress-bg"
          style={{ flexGrow: 1, height: "24px", borderRadius: "999px" }}
        >
          <div
            className="progress-bar custom-progress-fill"
            role="progressbar"
            style={{
              width: `${animatedWidth}%`,
              background: barColor,
              height: "100%",
              borderRadius: "999px",
            }}
            aria-valuenow={clampedScore}
            aria-valuemin={1}
            aria-valuemax={10}
          />
        </div>
      </div>
    </div>
  );
};

// --- Main Review Component ---
const Review: React.FC<ReviewProps> = ({
  title,
  imageUrl,
  aspects,
  reviewText,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Calculate the overall score automatically
  const overallScore = useMemo(() => {
    if (aspects.length === 0) return 0;
    const total = aspects.reduce((sum, aspect) => sum + aspect.score, 0);
    return total / aspects.length;
  }, [aspects]);

  // Pre-calculate overall stats for the collapsed view
  const clampedOverall = Math.min(Math.max(overallScore, 1), 10);
  const overallPercentage = (clampedOverall / 10) * 100;
  const overallBarColor = getScoreColor(clampedOverall);
  const overallDisplayScore = clampedOverall.toFixed(1);

  return (
    <div
      className={`review-container rounded-4 mb-4 ${isExpanded ? "expanded shadow" : "shadow-sm"}`}
      onClick={() => !isExpanded && setIsExpanded(true)}
    >
      {/* COLLAPSED VIEW */}
      {!isExpanded && (
        <div className="review-header d-flex align-items-center p-3 animate-fade-in w-100">
          <div
            className="d-flex align-items-center pe-3"
            style={{ flex: "0 0 50%" }}
          >
            <img
              src={imageUrl}
              alt={`${title}`}
              className="image-collapsed flex-shrink-0"
            />
            <div className="review-text-area p-2 px-3 rounded-4 bg-dark border ms-3">
              <h3
                className="review-title-collapsed m-0 text-wrap text-break d-flex align-items-center text-start"
                style={{ minHeight: "4rem", lineHeight: "1.2" }}
              >
                {title}
              </h3>
            </div>
          </div>

          <div
            className="d-flex align-items-center pe-2"
            style={{ flex: "0 0 50%" }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                minWidth: "95px",

                background: overallBarColor,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              <span
                style={{
                  fontSize: "2.8rem",
                  fontWeight: "700",
                  lineHeight: "0.8",
                  letterSpacing: "-2px",
                }}
              >
                {overallDisplayScore}
              </span>
              <span
                style={{
                  fontSize: "0.9rem",
                  fontWeight: "700",
                  color: "var(--space-muted)",
                  marginLeft: "4px",
                }}
              >
                /10
              </span>
            </div>

            <div
              className="progress custom-progress-bg ms-3"
              style={{ flexGrow: 1, height: "24px", borderRadius: "999px" }}
            >
              <div
                className="progress-bar custom-progress-fill"
                role="progressbar"
                style={{
                  width: `${overallPercentage}%`,
                  background: overallBarColor,
                  height: "100%",
                  borderRadius: "999px",
                }}
              />
            </div>
          </div>
        </div>
      )}

      {/* EXPANDED DETAILS VIEW */}
      {isExpanded && (
        <div className="review-details p-4 animate-fade-in">
          <div className="row mb-4 gx-md-5">
            {/* Left Column: Title and Box Art (Forced to center) */}
            <div className="col-12 col-md-auto d-flex flex-column align-items-center mb-4 mb-md-0">
              <div className="review-text-area p-2 rounded-4 bg-dark border mb-3">
                <h2
                  className="review-title mt-2 mb-2 text-center text-wrap text-break w-100"
                  style={{ maxWidth: "280px", lineHeight: "1.2" }}
                >
                  {title}
                </h2>
              </div>

              <img
                src={imageUrl}
                alt={`${title}`}
                className="image-large rounded-4 shadow-sm my-auto"
              />
            </div>

            {/* Right Column: Progress Bars (Removed justify-content-center to top-align) */}
            <div className="col-12 col-md d-flex flex-column gap-3 pe-md-4">
              <ProgressBar title="Overall" score={overallScore} isMain={true} />
              <hr className="border-secondary opacity-25 my-1" />

              {aspects.map((aspect, index) => (
                <ProgressBar
                  key={index}
                  title={aspect.name}
                  score={aspect.score}
                />
              ))}
            </div>
          </div>

          {/* Written Review Section */}
          <div className="review-text-area p-4 rounded-4 bg-dark border mt-2">
            <p className="m-0 text-light" style={{ lineHeight: "1.7" }}>
              {reviewText}
            </p>
          </div>

          {/* Close Button */}
          <div className="d-flex justify-content-end mt-4">
            <button
              className="btn btn-outline-light px-4"
              onClick={(e) => {
                e.stopPropagation();
                setIsExpanded(false);
              }}
            >
              Close Review
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Review;
