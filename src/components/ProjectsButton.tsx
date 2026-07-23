type NavPage = "home" | "project1";

type ProjectsButtonProps = {
  title: string;
  description: string;
  image: string;
  redirectPage: NavPage;
  onNavigate: (page: NavPage) => void;
};

function ProjectsButton({
  title,
  description,
  image,
  redirectPage,
  onNavigate,
}: ProjectsButtonProps) {
  return (
    <button
      type="button"
      className="btn btn-dark projects-button w-100 p-0 overflow-hidden rounded-4 shadow-sm border-0 text-start"
      onClick={() => onNavigate(redirectPage)}
    >
      <span
        aria-hidden="true"
        className="projects-button__image"
        style={{ backgroundImage: `url(${image})` }}
      />
      <span aria-hidden="true" className="projects-button__overlay" />
      <span className="position-relative z-1 d-flex h-100 w-100 align-items-center p-4 p-md-5">
        <span className="projects-button__content text-start">
          <span className="projects-button__title d-block fw-semibold">
            {title}
          </span>
          <span className="projects-button__description d-block text-secondary">
            {description}
          </span>
        </span>
      </span>
    </button>
  );
}

export default ProjectsButton;
