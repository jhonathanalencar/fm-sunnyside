import { Header } from "./components";
import { About, Hero, Services, Testimonials } from "./containers";

export function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <div className="projects">
          <img src="" alt="project" />
          <img src="" alt="project" />
          <img src="" alt="project" />
          <img src="" alt="project" />
        </div>
      </main>
      <footer>
        <strong>sunnyside</strong>
        <nav>
          <ul>
            <li>
              <a href="#">About</a>
              <a href="#">Services</a>
              <a href="#">Projects</a>
            </li>
          </ul>
        </nav>
        <ul>
          <li>
            <a href="#">facebook</a>
          </li>
          <li>
            <a href="#">instagram</a>
          </li>
          <li>
            <a href="#">twitter</a>
          </li>
          <li>
            <a href="#">pinterest</a>
          </li>
        </ul>
      </footer>
    </>
  )
}
