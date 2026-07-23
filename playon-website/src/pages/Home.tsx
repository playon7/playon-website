import project1 from "../assets/project1.png";
import gameReview from "../assets/p5r_loading_screen.png";
import animeReview from "../assets/onk-s1-visual.jpg";
import Carousel, { type CarouselItem } from "../components/Carousel";
import Button from "../components/Button";

type HomeProps = {
  onNavigate: (
    page:
      | "home"
      | "projects"
      | "project1"
      | "fun"
      | "anime-reviews"
      | "game-reviews"
      | "resume"
      | "contact",
  ) => void;
};

function Home({ onNavigate }: HomeProps) {
  const carouselItems: CarouselItem[] = [
    {
      text: "Guess the Drawing",
      to: "project1",
      backgroundImage: project1,
      alt: "Guess the Drawining",
    },
    {
      text: "Game Review",
      to: "game-reviews",
      backgroundImage: gameReview,
      alt: "Tetris AI",
    },
    {
      text: "Anime Reviews",
      to: "anime-reviews",
      backgroundImage: animeReview,
      alt: "Anime Reviews",
    },
  ];

  return (
    <>
      <main className="container min-vh-100 d-flex flex-column justify-content-center align-items-center text-center">
        <h1 className="hero-title mb-4">Hi. I'm Gui.</h1>

        {/* <p className="lead text-secondary mb-4" style={{ maxWidth: "600px" }}>
          I'm a student at Carnegie Mellon University studying Mathematics and
          Computer Science, and this is my personal website.
        </p> */}

        <div className="d-flex gap-3">
          <Button href="/#resume">Resume</Button>
          <Button href="/#about-me">About Me</Button>
        </div>
      </main>

      <div className="featured-banner">
        <h2 className="featured-banner__title">Featured Pages</h2>
      </div>

      <section className="pb-5">
        <Carousel
          id="homeHighlightsCarousel"
          items={carouselItems}
          onNavigate={onNavigate}
        />
      </section>
    </>
  );
}

export default Home;
