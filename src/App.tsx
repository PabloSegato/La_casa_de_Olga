import { Hero } from "./pages/Hero";
import logo from "./assets/pictures/logo-sin-fondo.png";
import styles from "./modules/App.module.css";
import { Gallery } from "./pages/Gallery";
import ContactForm from "./pages/ContactForm";
import { Route, Routes } from "react-router";
import { AboutUs } from "./pages/AboutUs";
import { NavBar } from "./pages/NavBar";

export const App = () => {
  return (
    <div className={styles.mainContainer}>
      <NavBar />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>

      <footer>
        <img src={logo} />

        <small>&reg; Todo los derechos reservados 2026</small>
      </footer>
    </div>
  );
};
