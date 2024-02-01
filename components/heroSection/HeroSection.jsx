"use client";

import React, { useEffect, useRef } from "react";
import styles from "./style.module.scss";
//import hoverEffect from "hover-effect";
// import image from "./images/circle-era.png";
// import image2 from "./images/circle-era-2.png";
//import overlay from "../../public/images/overlay.png";
import Image from "next/image";

const HeroSection = () => {
  // useEffect(() => {
  //   var image_animate = new hoverEffect({
  //     parent: document.getElementById("circle"),
  //     intensity: 0.3,
  //     image1: document.getElementById("img-1"),
  //     image2: document.getElementById("img-2"),
  //     displacementImage: overlay,
  //   });
  // });
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
