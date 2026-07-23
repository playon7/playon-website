import guiImage from "../assets/gui.jpg";
import SocialMedia from "../components/SocialMedia";

function Contact() {
  return (
    <>
      <main className="container pt-5 pb-4">
        <div className="row align-items-center g-4">
          <div className="col-lg-7">
            <p className="text-uppercase text-primary fw-semibold mb-2">
              About Me
            </p>
            <h1 className="display-5 fw-bold mb-3">Hello!</h1>

            <p className="lead text-secondary mb-4 pe-4">
              My name is Guilherme Salles, but I usually go by "Gui". I'm a
              student at Carnegie Mellon University studying Mathematics and
              Computer Science, and this is my personal website.
            </p>

            <p className="lead text-secondary mb-4 pe-4">
              I love playing video games, watching anime, and eating great food.
              On my Instagram, I post my Geometry Dash completions, with my
              hardest being the Extreme Demon Cataclysm!
            </p>

            <p className="lead text-secondary mb-4 pe-4">
              My favorite anime are 【Oshi no Ko】, Kaguya-sama: Love is War,
              and Code Geass. I love talking about shows I've watched, so feel
              free to reach out!
            </p>

            <p className="lead text-secondary mb-4 pe-4">
              At heart, I am a math competitor, participating in events like
              AMC, AIME, Mu Alpha Theta, FAMAT, and CMIMC. Aside from the
              accolades I have received, I've also written tests for classmates
              and competitions, such as the FAMAT 2026 State Convention Matrices
              and Vectors test.
            </p>

            <p className="lead text-secondary mb-4 pe-4">
              I also dabble in many coding projects, varying in fields like
              machine learning, back-end API development, and image processing.
              A large reason for hosting this site is to let me show off some of
              these things I've made.
            </p>
          </div>

          <div className="col-lg-5">
            <img
              src={guiImage}
              alt="Portrait of Gui"
              className="w-100 border rounded-4 shadow-sm"
            />
          </div>
        </div>
      </main>

      <div className="mt-5">
        <SocialMedia />
      </div>
    </>
  );
}

export default Contact;
