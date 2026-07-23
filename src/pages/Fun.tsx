import FunButton from "../components/FunButton";
import animeReviewsBackground from "../assets/onk-s1-visual.jpg";
import gameReviewsBackground from "../assets/p5r_loading_screen.png";

type FunProps = {
  onNavigate: (page: "anime-reviews" | "game-reviews") => void;
};

function Fun({ onNavigate }: FunProps) {
  const funButtons = [
    {
      text: "Anime Reviews",
      to: "anime-reviews",
      backgroundImage: animeReviewsBackground,
    },
    {
      text: "Game Reviews",
      to: "game-reviews",
      backgroundImage: gameReviewsBackground,
    },
  ] as const;

  return (
    <main className="container py-5">
      <div className="row justify-content-center mb-4">
        <div className="col-lg-8 text-center">
          <p className="text-uppercase text-primary fw-semibold mb-2 fs-1">
            Fun
          </p>
        </div>
      </div>

      <div className="row g-4 justify-content-center">
        {funButtons.map((button) => (
          <div className="col-md-6" key={button.to}>
            <FunButton
              text={button.text}
              to={button.to}
              backgroundImage={button.backgroundImage}
              onNavigate={onNavigate}
            />
          </div>
        ))}
      </div>
    </main>
  );
}

export default Fun;
