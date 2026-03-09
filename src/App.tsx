import { AboutUs } from "./pages/AboutUs";
import { Hero } from "./pages/Hero";
import logo from "./assets/pictures/logo-sin-fondo.png";
import styles from "./modules/App.module.css";
import { NavBar } from "./pages/NavBar";
import { Gallery } from "./pages/Gallery";
import ContactForm from "./pages/ContactForm";

export const App = () => {
  return (
    <div className={styles.mainContainer}>
      <NavBar />
      <Hero />
      <AboutUs />
      <Gallery />
      <ContactForm />

      <footer>
        <img src={logo} />

        <small>&reg; Todo los derechos reservados 2026</small>
      </footer>
    </div>
  );
};
