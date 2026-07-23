import Review from "../components/Review";
import botw from "../assets/botw.jpg";
import p5r from "../assets/p5r.jpg";
import ReturnButton from "../components/ReturnButton";

function GameReviews() {
  return (
    <>
      <ReturnButton />
      <main className="container py-5">
        <div className="row justify-content-center mb-4">
          <div className="col-lg-8 text-center">
            <p className="text-uppercase text-primary fw-semibold mb-2">Fun</p>
            <h1 className="display-6 fw-bold mb-0">Game Reviews</h1>
            <p className="text-secondary mb-0">
              {" "}
              My reviews on the many games I've played. Click on a game to
              reveal a detailed review.{" "}
            </p>
          </div>
        </div>
      </main>

      <div>
        <Review
          title="The Legend of Zelda: Breath of the Wild"
          imageUrl={botw}
          aspects={[
            { name: "Graphics & Art", score: 9 },
            { name: "Gameplay", score: 10 },
            { name: "OST", score: 10 },
            { name: "Story", score: 9 },
            { name: "Personal Factor", score: 10 },
          ]}
          reviewText=""
        />

        <Review
          title="Persona 5 Royal"
          imageUrl={p5r}
          aspects={[
            { name: "Graphics & Art", score: 9 },
            { name: "Gameplay", score: 10 },
            { name: "OST", score: 10 },
            { name: "Story", score: 8 },
            { name: "Personal Factor", score: 10 },
          ]}
          reviewText=""
        />
      </div>
    </>
  );
}

export default GameReviews;
