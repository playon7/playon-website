import { useEffect, useMemo, useRef, useState } from "react";
import "./Carousel.css";

type CarouselPage =
  | "home"
  | "projects"
  | "project1"
  | "fun"
  | "anime-reviews"
  | "game-reviews"
  | "resume";

export type CarouselItem = {
  text: string;
  to: CarouselPage;
  backgroundImage: string;
  alt: string;
};

type CarouselProps = {
  id: string;
  items: CarouselItem[];
  onNavigate: (page: CarouselPage) => void;
};

function Carousel({ id, items, onNavigate }: CarouselProps) {
  const safeItems = useMemo(() => {
    if (items.length === 0) return [];
    let extended = [...items];
    while (extended.length < 5) {
      extended = [...extended, ...items];
    }
    return extended;
  }, [items]);

  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<"prev" | "next" | null>(null);
  const animationTimeoutRef = useRef<number | null>(null);
  const animationDurationMs = 920;

  const totalItems = safeItems.length;

  const getIndex = (index: number) => {
    if (totalItems === 0) {
      return 0;
    }

    return (index + totalItems) % totalItems;
  };

  const triggerSlide = (nextIndex: number, nextDirection: "prev" | "next") => {
    setDirection(nextDirection);
    setActiveIndex(nextIndex);

    if (animationTimeoutRef.current !== null) {
      window.clearTimeout(animationTimeoutRef.current);
    }

    animationTimeoutRef.current = window.setTimeout(() => {
      setDirection(null);
      animationTimeoutRef.current = null;
    }, animationDurationMs);
  };

  const goToPrevious = () => {
    triggerSlide(getIndex(activeIndex - 1), "prev");
  };

  const goToNext = () => {
    triggerSlide(getIndex(activeIndex + 1), "next");
  };

  useEffect(() => {
    return () => {
      if (animationTimeoutRef.current !== null) {
        window.clearTimeout(animationTimeoutRef.current);
      }
    };
  }, []);

  const previewSlides = useMemo(
    () => [
      { index: getIndex(activeIndex - 2), position: "hidden-prev" as const },
      { index: getIndex(activeIndex - 1), position: "prev" as const },
      { index: getIndex(activeIndex), position: "active" as const },
      { index: getIndex(activeIndex + 1), position: "next" as const },
      { index: getIndex(activeIndex + 2), position: "hidden-next" as const },
    ],
    [activeIndex, totalItems],
  );

  if (totalItems === 0) {
    return null;
  }

  return (
    <section
      className={`home-carousel home-carousel--breakout ${
        direction ? `home-carousel--dir-${direction}` : ""
      }`}
      aria-roledescription="carousel"
      aria-label="Featured home highlights"
    >
      <div className="home-carousel__controls-wrap">
        <button
          type="button"
          className="home-carousel__control home-carousel__control--prev"
          onClick={goToPrevious}
          aria-controls={id}
          aria-label="Previous slide"
        >
          <span aria-hidden="true">&#10094;</span>
        </button>

        <div
          id={id}
          className="home-carousel__track"
          role="group"
          aria-live="polite"
        >
          {previewSlides.map(({ index, position }) => {
            const slide = safeItems[index];
            const isActive = position === "active";

            return (
              <button
                key={`${index}-${slide.text}`}
                type="button"
                className={`home-carousel__slide home-carousel__slide--${position}`}
                aria-label={`Go to ${slide.text}`}
                aria-current={isActive ? "true" : undefined}
                onClick={() => {
                  if (isActive) {
                    onNavigate(slide.to);
                    return;
                  }

                  if (position === "next") {
                    goToNext();
                    return;
                  }

                  goToPrevious();
                }}
              >
                <img
                  src={slide.backgroundImage}
                  alt={slide.alt}
                  className="home-carousel__image"
                  draggable={false}
                />
                <span className="home-carousel__overlay" aria-hidden="true" />
                <span className="home-carousel__content">
                  <span className="home-carousel__title">{slide.text}</span>
                  {isActive ? (
                    <span className="home-carousel__hint">Click to open</span>
                  ) : (
                    <span className="home-carousel__hint">Preview</span>
                  )}
                </span>
              </button>
            );
          })}
        </div>

        <button
          type="button"
          className="home-carousel__control home-carousel__control--next"
          onClick={goToNext}
          aria-controls={id}
          aria-label="Next slide"
        >
          <span aria-hidden="true">&#10095;</span>
        </button>
      </div>
    </section>
  );
}

export default Carousel;
