import { Header } from "./components";
import { About, Hero, Services } from "./containers";


export function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <div className="testimonials">
          <strong>Client testimonials</strong>
          <article>
            <img src="" alt="picture" />
            <blockquote>
              <p>
                We put our trust in Sunnyside and they delivered, making sure out needs were met and deadlines were always hit.
              </p>
              <cite>
                  <strong>Emily R.</strong>
                  <span>Marketing Director</span>
              </cite>
            </blockquote> 
          </article>
          <article>
            <img src="" alt="picture" />
            <blockquote>
              <p>
                Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience.
              </p>
              <cite>
                  <strong>Thomas S.</strong>
                  <span>Chief Operating Officer</span>
              </cite>
            </blockquote> 
          </article>
          <article>
            <img src="" alt="picture" />
            <blockquote>
              <p>
                Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!
              </p>
              <cite>
                  <strong>Jennie F.</strong>
                  <span>Business Owner</span>
              </cite>
            </blockquote> 
          </article>
        </div>
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
