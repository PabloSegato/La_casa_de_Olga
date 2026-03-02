import styles from "../modules/NavBar.module.css";
import logo from "../assets/pictures/logo-sin-fondo.png";

export const NavBar = () => {
  return (
    <div className={styles.container}>
      <img src={logo} />
      <nav>
        <a href="#">Inicio</a>
        <a href="#">Conocenos</a>
        <a href="#">Galeria</a>
        <a href="#">Contactanos</a>
      </nav>
      <button>Crear Reserva</button>
    </div>
  );
};
