import styles from "../modules/Gallery.module.css";
import { MyGallery } from "./MyGallery";

export const Gallery = () => {
  return (
    <div className={styles.container}>
      <h1>Nuestra galería </h1>
      <p>
        Capturamos la escencia de nuestro refugio. Cada imagen cuenta una
        historia de paz y confort
      </p>
      <div className={styles.gallery_container}>
        <MyGallery />
      </div>
    </div>
  );
};
