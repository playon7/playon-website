import React from "react";
import "./Resume.css";
import Download from "../components/Download";

// --- Types & Interfaces ---
interface ResumeItemData {
  id: string | number;
  title: string;
  subtitle?: string;
  date?: string;
  description?: React.ReactNode;
  bullets?: React.ReactNode[];
  gpa?: string;
  coursework?: string[];
  activities?: string[];
}

interface SkillCategory {
  category: string;
  skills: string[];
}

// --- Resume Data ---
const educationData: ResumeItemData[] = [
  {
    id: 1,
    title: "Bachelor of Science in Mathematics, Major in Computer Science",
    subtitle: "Carnegie Mellon University",
    date: "August 2025 - May 2029",
    gpa: "3.88/4.0",
    coursework: [
      "Introduction to Mathematical Finance (21-270)",
      "Multidimensional Calculus (21-268)",
      "Principles of Imperative Computation (15-122)",
    ],
    activities: ["CMIMC", "Quant Club", "Putnam"],
  },
  {
    id: 2,
    title: "High School Diploma",
    subtitle: "American Heritage Schools - Broward Campus",
    date: "August 2021 - May 2025",
    gpa: "5.75/6.0",
    coursework: [
      "Machine Learning & AI",
      "Differential Equations",
      "Linear Algebra",
      "AP Statistics",
    ],
    activities: [
      "Computer Science Honor Society (President)",
      "Computer Science Society",
      "Mu Alpha Theta Club (Vice President)",
      "Mathematics Competition",
    ],
  },
];

const experienceData: ResumeItemData[] = [
  {
    id: 1,
    title: "SURA Researcher",
    subtitle: "Carnegie Mellon University",
    date: "May 2026 - July 2026",
    bullets: [
      <>
        Remote research on the Theory of Computation using Raymond Smullyan's
        book <i>To Mock a Mockingbird</i> under the guidance of Professor
        Richard Statman.
      </>,
      <>
        Creating intermediary proofs to show that we cannot find a Sage bird
        with song birds <i>B</i>, <i>I</i>, and <i>M</i>.
      </>,
    ],
  },
  {
    id: 2,
    title: "AI Softward Engineer Intern",
    subtitle: "Starwood Property Trust",
    date: "May 2025 - June 2026",
    bullets: [
      <>
        Using Python and the OpenAI library, trained and evaluated a custom
        GPT-based classifier on a large collection of PDF-extracted text to
        identify legal documents, achieving 100% accuracy on an internal test
        set.
      </>,
    ],
  },
];

const projectsData: ResumeItemData[] = [
  {
    id: 1,
    title: "Brief.ly",
    subtitle: "Application, Hackathon Submission",
    date: "November 2024",
    bullets: [
      <>
        Developed a GPT-based summarization module to convert scraped news
        articles into structured summaries for personalized newsletters in
        Python.
      </>,
      <>
        Integrated a multi-step pipeline spanning web scraping, summarization,
        and automated email delivery.
      </>,
    ],
  },
  {
    id: 2,
    title: "Tetris AI",
    subtitle: "AI Model",
    date: "December 2024",
    bullets: [
      <>
        Designed and trained a Tetris agent in Python using a genetic algorithm,
        clearing 100,000+ lines in a single run.
      </>,
    ],
  },
  {
    id: 3,
    title: "Coral",
    subtitle: "Application",
    date: "August 2023 - December 2023",
    bullets: [
      <>
        Co-founded “Coral", a volunteering application built to connect students
        to local volunteering opportunities.
      </>,
      <>
        Engineered the back-end API and database infrastructure using Flask,
        implementing user data management and application functionality.
      </>,
    ],
  },
];

const awardsData: ResumeItemData[] = [
  {
    id: 1,
    title: "CMIMC Integration Bee 1st Place",
    date: "March 2025",
    description:
      "Awarded for achieving first place in the annual CMIMC Integration Bee competition against approximately 100 participants.",
  },
  {
    id: 2,
    title: '44 "Top 5" Awards in Mu Alpha Theta Competitions',
    date: "August 2021 - July 2025",
    description:
      "Received 44 'Top 5' awards in various Mu Alpha Theta and FAMAT mathematics competitions over the course of four years.",
  },
  {
    id: 3,
    title: "3x AIME Qualifier",
    date: "November 2022 - February 2025",
    description:
      "Qualified for the American Invitational Mathematics Examination in 2023, 2024, and 2025. Qualified with Distinction in 2023. Best score of 7 in 2025.",
  },
  {
    id: 4,
    title: "UCF High School Programming Tournament Top 5",
    date: "March 2025",
    description:
      "Awarded for achieving a top 5 placement in the UCF High School Programming Tournament in a team of 3.",
  },
];

const skillsData: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["English", "Portuguese", "French"],
  },
  {
    category: "Programming Languages",
    skills: ["Python", "C", "LaTeX", "Markdown"],
  },
  {
    category: "Tools",
    skills: [
      "NumPy",
      "Pandas",
      "Scikit-learn",
      "TensorFlow",
      "Git",
      "Microsoft Azure",
    ],
  },
];

const coursesData: string[] = [
  "Multidimensional Calculus",
  "Principles of Imperative Computation",
  "Introduction to Mathematical Finance",
  "Matrices and Linear Transformations",
  "Machine Learning & AI",
];

// --- Reusable Components ---

const ResumeCard: React.FC<{ item: ResumeItemData }> = ({ item }) => (
  <div className="resume-card rounded-4">
    <div className="resume-card-header">
      <h3 className="resume-card-title">{item.title}</h3>
      {item.date && <span className="resume-card-date">{item.date}</span>}
    </div>
    {item.subtitle && <h4 className="resume-card-subtitle">{item.subtitle}</h4>}
    {item.gpa && (
      <p className="resume-card-detail">
        <strong>GPA:</strong> {item.gpa}
      </p>
    )}
    {item.coursework && (
      <p className="resume-card-detail">
        <strong>Relevant Coursework:</strong> {item.coursework.join(", ")}
      </p>
    )}
    {item.activities && (
      <p className="resume-card-detail">
        <strong>Activities:</strong> {item.activities.join(", ")}
      </p>
    )}
    {item.description && <p className="resume-card-desc">{item.description}</p>}
    {item.bullets && (
      <ul className="resume-card-bullets">
        {item.bullets.map((bullet, idx) => (
          <li key={idx}>{bullet}</li>
        ))}
      </ul>
    )}
  </div>
);

const ResumeSection: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => (
  <section className="resume-section">
    <h2 className="resume-section-title">{title}</h2>
    <div className="resume-section-content">{children}</div>
  </section>
);

const SkillBadge: React.FC<{ label: string }> = ({ label }) => (
  <span className="skill-badge">{label}</span>
);

// --- Main Page Component ---

const Resume: React.FC = () => {
  return (
    <>
      <div className="resume-page container">
        {/* Header */}
        <header className="resume-header">
          <h1 className="text-primary text-uppercase">Resume</h1>
        </header>

        <div className="resume-grid">
          {/* Left Column (Experience, Projects, Education, Awards) */}
          <div className="resume-main-col">
            <ResumeSection title="Education">
              {educationData.map((item) => (
                <ResumeCard key={item.id} item={item} />
              ))}
            </ResumeSection>

            <ResumeSection title="Experience">
              {experienceData.map((item) => (
                <ResumeCard key={item.id} item={item} />
              ))}
            </ResumeSection>

            <ResumeSection title="Projects">
              {projectsData.map((item) => (
                <ResumeCard key={item.id} item={item} />
              ))}
            </ResumeSection>

            <ResumeSection title="Awards">
              {awardsData.map((item) => (
                <ResumeCard key={item.id} item={item} />
              ))}
            </ResumeSection>
          </div>

          {/* Right Column (Skills & Courses) */}
          <div className="resume-side-col">
            <ResumeSection title="Skills">
              <div className="skills-container card rounded-4">
                {skillsData.map((group, idx) => (
                  <div key={idx} className="skill-group">
                    <h4 className="skill-group-title">{group.category}</h4>
                    <div className="skill-badge-wrapper">
                      {group.skills.map((skill) => (
                        <SkillBadge key={skill} label={skill} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </ResumeSection>

            <ResumeSection title="Relevant Courses">
              <div className="courses-container card rounded-4">
                <div className="skill-badge-wrapper">
                  {coursesData.map((course, idx) => (
                    <SkillBadge key={idx} label={course} />
                  ))}
                </div>
              </div>
            </ResumeSection>
          </div>
        </div>

        <hr className="resume-divider" />

        <div className="download-section">
          <h1 className="display-5 fw-bold">Download</h1>
          <p className="lead text-secondary mb-4">
            You can download my resume or open it in a new tab below.
          </p>

          <Download
            fileUrl="/Resume.pdf"
            fileName="Gui Resume.pdf"
            buttonText="Open Resume"
          />
        </div>
      </div>
    </>
  );
};

export default Resume;
