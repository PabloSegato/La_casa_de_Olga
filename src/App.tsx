import { AboutUs } from "./pages/AboutUs";
import ContactForm from "./pages/ContactForm";
import { Gallery } from "./pages/Gallery";
import { Hero } from "./pages/Hero";
import { NavBar } from "./pages/NavBar";
import logo from "./assets/pictures/logo-sin-fondo.png";
import styles from "./modules/App.module.css";

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
