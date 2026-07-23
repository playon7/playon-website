import project1 from "../assets/project1.png";
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
  // {
  //   title: "Project Two",
  //   description: "Use this card for a second project or case study highlight.",
  //   image: placeholder2Image,
  //   to: "home",
  // },
  // {
  //   title: "Project Three",
  //   description: "This card can have anything I want it to have.",
  //   image: placeholderImage,
  //   to: "home",
  // },
  // {
  //   title: "Project Four",
  //   description: "This fourth example completes the two-row layout for now.",
  //   image: placeholder2Image,
  //   to: "home",
  // },
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
