"use client";

import React from "react";
import styles from "./style.module.scss";

import Image from "next/image";

const HeroSection = () => {
  return (
    <section className={styles.bg}>
      <div className={styles.Container}>
        <div className={styles.containerTitles}>
          <h2 className={styles.titleL}>Através do buraco de minhoca</h2>
          <div className={styles.circle}>
            <Image
              src="./Logo_Amarelo_Azul-Claro.svg"
              className={styles.logoAmarelo}
              height={500}
              width={500}
              alt="logo"
            />
          </div>
          <h2 className={styles.titleR}>Comunicação entre dimensões</h2>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
