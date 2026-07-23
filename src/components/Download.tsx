import React from "react";
import "./Download.css";

interface DownloadProps {
  fileUrl: string;
  fileName: string;
  buttonText?: string;
}

const Download: React.FC<DownloadProps> = ({
  fileUrl,
  fileName,
  buttonText = "Open File",
}) => {
  return (
    <div className="download-component">
      <div className="split-btn-group">
        {/* Left Side: Open in New Tab */}
        <a
          href={fileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="split-btn split-btn-main"
          aria-label={`Open ${fileName} in a new tab`}
        >
          {buttonText}
        </a>

        {/* Right Side: Direct Download */}
        <a
          href={fileUrl}
          download={fileName}
          className="split-btn split-btn-icon"
          aria-label={`Download ${fileName}`}
          title="Download File"
        >
          {/* Simple, dependency-free SVG Download Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Download;
