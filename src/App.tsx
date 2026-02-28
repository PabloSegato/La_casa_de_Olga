import { AboutUs } from "./component/AboutUs";
import ContactForm from "./component/ContactForm";
import { Gallery } from "./component/Gallery";
import { Hero } from "./component/Hero";
import { NavBar } from "./component/NavBar";

export const App = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <AboutUs />
      <Gallery />
      <ContactForm />
    </div>
  );
};
