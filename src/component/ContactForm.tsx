import styles from "../modules/Form.module.css";
import svg_phone from "../assets/pictures/phone.svg";
import svg_mail from "../assets/pictures/mail.svg";
import svg_location from "../assets/pictures/location.svg";

export default function ContactForm() {
  return (
    <div className={styles.containermain}>
      <div className={styles.container}>
        <div className={styles.informacion_propia}>
          <h2>Hacé tu Reserva</h2>
          <p>
            ¿Tenés alguna consulta o querés asegurar tu fecha? Completá el
            formulario y nos contactaremos a la brevedad.
          </p>
          <p>
            <img src={svg_phone} alt="" />
            +54 9 266 4324483
          </p>
          <p>
            <img src={svg_mail} alt="" />
            hosegato@yahoo.com.ar
          </p>
          <p>
            <img src={svg_location} alt="" />
            Villa de Merlo, San Luis
          </p>
        </div>
        <div className={styles.container_form}>
          <form action="" className={styles.formulario}>
            <label htmlFor="">
              NOMBRE
              <input type="text" placeholder="Ingrese su Nombre completo" />
            </label>

            <label htmlFor="">
              EMAIL
              <input type="email" placeholder="Ingrese su email" required />
            </label>
            <label htmlFor="">
              CHECK-IN
              <input type="date" />
            </label>
            <label htmlFor="">
              CHECK-OUT
              <input type="date" />
            </label>
            <label htmlFor="">
              MENSAJE / CONSULTA ESPECIALES
              <textarea placeholder="¿Cómo podemos ayudarte?"></textarea>
            </label>
            <button type="submit">ENVIAR SOLICITUD</button>
          </form>
        </div>
      </div>
    </div>
  );
}
