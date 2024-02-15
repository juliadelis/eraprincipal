import { useEffect } from "react";
import React from "react";
import styles from "./style.module.scss";
import Image from "next/image";

const ColorsSection = () => {
  return (
    <section className={styles.Section}>
      {" "}
      <div className={styles.Container}>
        <div className={styles.Camisa}>
          <Image
            src="/images/Mockup_1_CAMISETA.png"
            height={600}
            width={600}
            alt="image"
            className={styles.Image}
          />
        </div>
        <div className={styles.text}>
          <h2>realidade aumentada</h2>
          <p>
            A Realidade Aumentada (RA) é uma tecnologia que permite sobrepor
            elementos virtuais à nossa visão da realidade, como filtros do
            instagram e nossas estampas :){" "}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ColorsSection;
