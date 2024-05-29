import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Home } from "./components/Home/Home";
import { Navbar } from "./components/Navbar/Navbar";
import { Skills } from "./components/Skills/Skills";
import { Projects } from "./components/Projects/Projects";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
