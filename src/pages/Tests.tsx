import Test from "../components/Test";
import ReturnButton from "../components/ReturnButton";
import "./Tests.css";

const tests = [
  {
    title: "2026 States Matrices and Vectors",
    difficulty: 4,
    description:
      "The FAMAT 2026 States Matrices and Vectors test administered to 79 contestants, and what I consider to be my magnum opus. The highest score on the test was an 121/150, based on standard FAMAT scoring.",
    downloads: [
      {
        fileUrl: "/playon-website/tests/2026 States Matrices and Vectors.pdf",
        fileName: "2026 States Matrices and Vectors.pdf",
        buttonText: "Test",
      },
      {
        fileUrl:
          "/playon-website/tests/2026 States Matrices and Vectors Solutions.pdf",
        fileName: "2026 States Matrices and Vectors Solutions.pdf",
        buttonText: "Solutions",
      },
    ] as const,
  },
  {
    title: "Alpha Mock Individual",
    difficulty: 5,
    description:
      "An incredibly challenging individual test that covers all aspects of the FAMAT Alpha curriculum. With a 40 minute time-limit, it is highly recommended that contestants focus on solving a few of the second, much more challenging half of the test.",
    downloads: [
      {
        fileUrl: "/playon-website/tests/Alpha Mock Individual.pdf",
        fileName: "Alpha Mock Individual.pdf",
        buttonText: "Test",
      },
      {
        fileUrl: "/playon-website/tests/Alpha Mock Individual Solutions.pdf",
        fileName: "Alpha Mock Individual Solutions.pdf",
        buttonText: "Solutions",
      },
    ] as const,
  },
  {
    title: "Matrices and Vectors Workshop Open",
    difficulty: 3,
    description:
      "A short open-response test used to benchmark students and as review material for a linear algebra workshop in preparation for an upcoming competition.",
    downloads: [
      {
        fileUrl: "/playon-website/tests/MaV Workshop Open.pdf",
        fileName: "MaV Workshop Open.pdf",
        buttonText: "Test",
      },
      {
        fileUrl: "/playon-website/tests/MaV Workshop Open Solutions.pdf",
        fileName: "MaV Workshop Open Solutions.pdf",
        buttonText: "Solutions",
      },
    ] as const,
  },
  {
    title: "Theta Probability and Combinatorics",
    difficulty: 1,
    description:
      "A probability and combinatorics individual test themed around Tarot Cards.",
    downloads: [
      {
        fileUrl: "/playon-website/tests/PnC Theta Individual.pdf",
        fileName: "PnC Theta Individual.pdf",
        buttonText: "Test",
      },
      {
        fileUrl: "/playon-website/tests/PnC Theta Individual Solutions.pdf",
        fileName: "PnC Theta Individual Solutions.pdf",
        buttonText: "Solutions",
      },
    ] as const,
  },
  {
    title: "Theta Mock Individual",
    difficulty: 2,
    description:
      "An algebra and geometry mock individual test. Questions written completely by me, with solutions co-written with ex-classmate Rajam Arunprakash.",
    downloads: [
      {
        fileUrl: "/playon-website/tests/Theta Individual.pdf",
        fileName: "Theta Individual.pdf",
        buttonText: "Test",
      },
      {
        fileUrl: "/playon-website/tests/Theta Individual Solutions.pdf",
        fileName: "Theta Individual Solutions.pdf",
        buttonText: "Solutions",
      },
    ] as const,
  },
  {
    title: "Theta Mock Individual 2",
    difficulty: 2,
    description:
      "A sequel to the first Theta Mock Individual co-written with Rajam Arunprakash, but was never officially used nor completed. Several answer choices are missing and no answer sheet exists.",
    downloads: [
      {
        fileUrl: "/playon-website/tests/Theta Individual 2.pdf",
        fileName: "Theta Individual 2.pdf",
        buttonText: "Test",
      },
    ] as const,
  },
];

function Tests() {
  const leftColumnTests = tests.filter((_, index) => index % 2 === 0);
  const rightColumnTests = tests.filter((_, index) => index % 2 === 1);

  return (
    <>
      <ReturnButton />
      <main className="container py-5">
        <div className="row justify-content-center mb-4">
          <div className="col-lg-8 text-center">
            <p className="text-uppercase text-primary fw-semibold mb-2">
              Math Comp Tests
            </p>
            <h1 className="display-6 fw-bold mb-0">Tests</h1>
            <p className="text-secondary mb-0 pt-3">
              This is a collection of mathematics competition tests written for
              either competition or for practice that I wrote. Each test was
              written in Overleaf using LaTeX.
            </p>
          </div>
        </div>

        <div className="tests-grid">
          <div className="tests-grid__column">
            {leftColumnTests.map((test) => (
              <Test
                key={test.title}
                title={test.title}
                difficulty={test.difficulty}
                description={test.description}
                downloads={test.downloads}
              />
            ))}
          </div>

          <div className="tests-grid__column">
            {rightColumnTests.map((test) => (
              <Test
                key={test.title}
                title={test.title}
                difficulty={test.difficulty}
                description={test.description}
                downloads={test.downloads}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default Tests;
