// import styles from "../modules/Gallery.module.css";
import "./Gallery.css";
import ThreeDImageCarousel from "../components/lightswind/3d-image-carousel";
import bathroom from "../assets/pictures/baño_principal.jpg";
import singlebed from "../assets/pictures/cama_indiv_superior.jpg";
import parking_grill from "../assets/pictures/cochera_parrilla.jpg";
import kitchen from "../assets/pictures/cocina.jpg";
import mainroom from "../assets/pictures/hab_matrimonial.jpg";
import secondaryroom from "../assets/pictures/habitacion_secundaria.jpg";
import pool from "../assets/pictures/piscina.jpg";
import relaxtime from "../assets/pictures/sillones_comedor.jpg";

export const Gallery = () => {
  const slides = [
    { id: 1, src: pool },
    { id: 2, src: bathroom },
    { id: 3, src: singlebed },
    { id: 4, src: parking_grill },
    { id: 5, src: kitchen },
    { id: 6, src: mainroom },
    { id: 7, src: secondaryroom },
    { id: 9, src: relaxtime },
  ];

  return (
    <div className="gallery_text">
      <h1>Nuestra galería </h1>
      <p>
        Capturamos la escencia de nuestro refugio. Cada imagen cuenta una
        historia de paz y confort
      </p>
      <div className="gallery_container">
        <ThreeDImageCarousel
          slides={slides}
          autoplay={true}
          pauseOnHover={false}
        /> 
        
      </div>
    </div>
  );
};
