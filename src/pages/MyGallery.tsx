import { useRef } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/image-gallery.css";
import type { GalleryItem, ImageGalleryRef } from "react-image-gallery";
import bathroom from "../assets/pictures/baño_principal.jpg";
import singlebed from "../assets/pictures/cama_indiv_superior.jpg";
import parking_grill from "../assets/pictures/cochera_parrilla.jpg";
import kitchen from "../assets/pictures/cocina.jpg";
import mainroom from "../assets/pictures/hab_matrimonial.jpg";
import secondaryroom from "../assets/pictures/habitacion_secundaria.jpg";
import pool from "../assets/pictures/piscina.jpg";
import relaxtime from "../assets/pictures/sillones_comedor.jpg";

const images: GalleryItem[] = [
  {
    original: bathroom,
    thumbnail: bathroom,
  },
  {
    original: singlebed,
    thumbnail: singlebed,
  },
  {
    original: parking_grill,
    thumbnail: parking_grill,
  },
  {
    original: kitchen,
    thumbnail: kitchen,
  },

  {
    original: pool,
    thumbnail: pool,
  },

  {
    original: relaxtime,
    thumbnail: relaxtime,
  },
  {
    original: mainroom,
    thumbnail: mainroom, //en esta seccion tengo que hacer modificacion, ya que me descuadra la estetica con las fotos en verticales. Una vez que tenga todo horizontal quedara mas prolijo
  },
  {
    original: secondaryroom,
    thumbnail: secondaryroom,
  },
];

export function MyGallery() {
  const galleryRef = useRef<ImageGalleryRef>(null);

  return <ImageGallery ref={galleryRef} items={images} autoPlay={true} />;
}
