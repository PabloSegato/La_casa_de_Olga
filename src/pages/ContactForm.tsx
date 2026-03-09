import styles from "../modules/Form.module.css";
import svg_phone from "../assets/pictures/svg/phone.svg";
import svg_mail from "../assets/pictures/svg/mail.svg";
import svg_location from "../assets/pictures/svg/location.svg";
import { useState } from "react";

export default function ContactForm() {
  interface Client {
    nombre: string;
    email: string;
    ingreso: string;
    egreso: string;
    mensaje: string;
  }

  const initialValues: Client = {
    nombre: "",
    email: "",
    ingreso: "",
    egreso: "",
    mensaje: "",
  };

  const [formData, setFormData] = useState<Client>(initialValues);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(formData);
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { value, name } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className={styles.containerMain}>
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
          <form onSubmit={handleSubmit} className={styles.formulario}>
            <label>
              NOMBRE
              <input
                type="text"
                placeholder="Ingrese su Nombre completo"
                onChange={handleChange}
                name="nombre"
              />
            </label>

            <label>
              EMAIL
              <input
                type="email"
                placeholder="Ingrese su email"
                required
                onChange={handleChange}
                name="email"
              />
            </label>
            <label>
              CHECK-IN
              <input type="date" onChange={handleChange} name="ingreso" />
            </label>
            <label>
              CHECK-OUT
              <input type="date" onChange={handleChange} name="egreso" />
            </label>
            <label>
              MENSAJE / CONSULTA ESPECIALES
              <textarea
                placeholder="¿Cómo podemos ayudarte?"
                onChange={handleChange}
                name="mensaje"
              ></textarea>
            </label>
            <button type="submit">ENVIAR SOLICITUD</button>
          </form>
        </div>
      </div>
    </div>
  );
}
