import { AboutUs } from "./component/AboutUs";
import ContactForm from "./component/ContactForm";
import { Gallery } from "./component/Gallery";
import { Hero } from "./component/Hero";
import { NavBar } from "./component/NavBar";
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
