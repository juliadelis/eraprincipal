"use client";
import { useState, useEffect } from "react";
import React from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import GradientCursor from "./cursor";

const ColorsSection = () => {
  const [windowWidth, setWindowWidth] = useState(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    // Set initial window width
    setWindowWidth(window.innerWidth);

    // Event listener to update window width when the window is resized
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove event listener when component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
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

        {windowWidth >= 997 && <GradientCursor isActive={isActive} />}
      </div>
    </section>
  );
};

export default ColorsSection;
