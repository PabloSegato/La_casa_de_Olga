import logo from "../assets/pictures/logo-sin-fondo.png";
import "./NavBar.css";

export const NavBar = () => {
  return (
    <nav className="nav-container">
      <img className="img-navBar" src={logo} />
      <div>
        <a className="navigation" href="#">
          Inicio
        </a>
        <a className="navigation" href="#">
          Conocenos
        </a>
        <a className="navigation" href="#">
          Galeria
        </a>
        <a className="navigation" href="#">
          Contactanos
        </a>
      </div>
      <button className="booking">Crear Reserva</button>
    </nav>
  );
};
