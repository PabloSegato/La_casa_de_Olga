import styles from "../modules/AboutUs.module.css";
import svg_medal from "../assets/pictures/best-practices.svg";
import svg_tree from "../assets/pictures/trees.svg";
import svg_swim from "../assets/pictures/swin.svg";
import svg_wifi from "../assets/pictures/wifi.svg";
import svg_solarium from "../assets/pictures/solarium.svg";
import svg_parrilla from "../assets/pictures/parrilla.svg";

import frente from "../assets/pictures/frente_casa.jpg";

export const AboutUs = () => {
  return (
    <>
      <section>
        <div className={styles.container}>
          <span className={styles.tag}>
            15+
            <br />
            años de calidez
          </span>
          <img
            className={styles.foto_frente}
            src={frente}
            alt="Frente de la casa"
          />
          <div className={styles.about_us_description}>
            <h2>Hospitalidad y elegancia</h2>
            <h1>
              Un Legado Familiar en el <br /> Corazón de San Luis
            </h1>

            <p>
              Somos un emprendimiento familiar dedicado a brindar una <br />
              experiencia de alojamiento de primer nivel. La casa de Olga no es{" "}
              <br />
              solo una casa, es nuestro sueo compartido: un lugar donde cada{" "}
              <br />
              detalle ha sido cuado para que te sientas como en casa, rodeado de{" "}
              <br />
              la majestuosidad de la naturaleza puntana.
            </p>
            <div className={styles.container_ventajas}>
              <div className={styles.ventajas_card}>
                <img src={svg_medal} alt="" />
                <h3>Atención Personalizada</h3>
                <p>Atendido por sus propios dueños</p>
              </div>
              <div className={styles.ventajas_card}>
                <img src={svg_tree} alt="Arboles" />

                <h3>Entorno puro</h3>
                <p>Vistas panorámicas garantizadas.</p>
              </div>
            </div>
            <a href="#">Conoce mas sobre nuestra historia</a>
          </div>
        </div>
      </section>

      <div className={styles.grid_amenities}>
        <div>
          <img src={svg_swim} />
          <h2>Piscina</h2>
          <p>
            Disfrutá del agua con la mejor vista a las sierras durante todo el
            año.
          </p>
        </div>
        <div>
          <img src={svg_parrilla} />

          <h2> Parrilla & Quincho</h2>
          <p>Espacio totalmente equipado para los mejores asados en familia</p>
        </div>
        <div>
          <img src={svg_wifi} />

          <h2> WiFi de Alta Velocidad</h2>
          <p>
            Conectividad total para quienes necesitan trabajar o compartir
            momentos
          </p>
        </div>
        <div>
          <img src={svg_solarium} />

          <h2>Solárium</h2>
          <p>Terraza amplia diseñada para capturar los mejores atardeceres. </p>
        </div>
      </div>
    </>
  );
};
