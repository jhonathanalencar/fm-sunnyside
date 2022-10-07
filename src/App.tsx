import { Header } from "./components";
import { Footer } from "./components/Footer";
import { About, Hero, Services, Testimonials, Projects } from "./containers";

export function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <Projects />
      </main>
      <Footer />
    </>
  )
}
