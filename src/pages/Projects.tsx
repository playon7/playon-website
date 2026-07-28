import project1 from "../assets/project1.png";
import tests from "../assets/mao.png";
import ProjectsButton from "../components/ProjectsButton";

type ProjectsProps = {
  onNavigate: (page: string) => void;
};

const projectButtons = [
  {
    title: "Doodle Guesser",
    description:
      "Currently WIP. An AI model that guesses what you doodled on the canvas!",
    image: project1,
    to: "project1",
  },
  {
    title: "Math Comp Tests",
    description:
      "A set of math competition tests, written for either competitions or practice sessions, made by me.",
    image: tests,
    to: "tests",
  },
] as const;

function Projects({ onNavigate }: ProjectsProps) {
  return (
    <main className="container py-5">
      <div className="mb-4">
        <p className="text-uppercase text-primary fw-semibold mb-2">Projects</p>
        <h1 className="display-6 fw-bold mb-0">Selected work</h1>
      </div>

      <div className="row g-4">
        {projectButtons.map((projectButton) => (
          <div className="col-md-6" key={projectButton.title}>
            <ProjectsButton
              title={projectButton.title}
              description={projectButton.description}
              image={projectButton.image}
              redirectPage={projectButton.to}
              onNavigate={onNavigate}
            />
          </div>
        ))}
      </div>
    </main>
  );
}

export default Projects;
