import Review from "../components/Review";
import onk from "../assets/onk-s1-visual.jpg";
import tensura from "../assets/tensura-s1.jpg";
import ReturnButton from "../components/ReturnButton";

function AnimeReviews() {
  return (
    <>
      <ReturnButton />
      <main className="container py-5">
        <div className="row justify-content-center mb-4">
          <div className="col-lg-8 text-center">
            <p className="text-uppercase text-primary fw-semibold mb-2">Fun</p>
            <h1 className="display-6 fw-bold mb-0">Anime Reviews</h1>
            <p className="text-secondary mb-0">
              {" "}
              My reviews on the many anime I've watched. Click on a show to
              reveal a detailed review.{" "}
            </p>
          </div>
        </div>
      </main>

      <div>
        <Review
          title="【Oshi no Ko】"
          imageUrl={onk}
          aspects={[
            { name: "Story", score: 9 },
            { name: "Characters", score: 10 },
            { name: "Animation", score: 10 },
            { name: "Setting", score: 10 },
            { name: "Personal Factor", score: 10 },
          ]}
          reviewText=""
        />

        <Review
          title="That Time I Got Reincarnated as a Slime"
          imageUrl={tensura}
          aspects={[
            { name: "Story", score: 6 },
            { name: "Characters", score: 10 },
            { name: "Animation", score: 7 },
            { name: "Setting", score: 10 },
            { name: "Personal Factor", score: 9 },
          ]}
          reviewText=""
        />
      </div>
    </>
  );
}

export default AnimeReviews;
