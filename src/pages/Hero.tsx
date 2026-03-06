import styles from "../modules/Hero.module.css";

export const Hero = () => {
  return (
    <section>
      <div className={styles.container}>
        <h3>
          Bienvenidos al 3er <strong> MICROCLIMA </strong> del mundo
        </h3>
        <h1>
          Tu Refugio en las <br />
          <strong> Sierras de Merlo</strong>
        </h1>
        <p>
          Descrubrí la serenidad del tercer microclima del mundo y el confort de
          <br />
          un hogar pensado paratu descanso absoluto en San Luis, Argentina
        </p>
        <div className={styles.container_buttons}>
          <button>Consultar Disponibilidad</button>
          <button>Ver Galeria</button>
        </div>
      </div>
    </section>
  );
};
