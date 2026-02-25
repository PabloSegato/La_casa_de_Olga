import styles from "../modules/NavBar.module.css";

export const NavBar = () => {
  return (
    <div className={styles.container}>
      <h1>La casa de Olga</h1>
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
