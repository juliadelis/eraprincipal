"use client";
import { useState } from "react";
import React from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import GradientCursor from "./cursor";

const ColorsSection = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <section id="sobreRa" className={styles.Section}>
      <div className={styles.Container}>
        <div className={styles.Camisa}>
          <Image
            onMouseEnter={() => {
              setIsActive(true);
            }}
            onMouseLeave={() => {
              setTimeout(() => {
                setIsActive(false);
              }, 2000);
            }}
            src="/images/Mockup_1_CAMISETA.png"
            height={600}
            width={600}
            alt="image"
            className={styles.Image}
          />
        </div>
        <div
          onMouseEnter={() => {
            setIsActive(true);
          }}
          onMouseLeave={() => {
            setTimeout(() => {
              setIsActive(false);
            }, 2000);
          }}
          className={styles.text}>
          <h2>realidade aumentada</h2>
          <p>
            A Realidade Aumentada (RA) é uma tecnologia que permite sobrepor
            elementos virtuais à nossa visão da realidade, como filtros do
            instagram e nossas estampas :)
          </p>
        </div>

        <GradientCursor isActive={isActive} />
      </div>
    </section>
  );
};

export default ColorsSection;
