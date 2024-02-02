"use client";
import React from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import useMousePosition from "@/utils/useMousePosition";

const NewRealitiesSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  const { x, y } = useMousePosition();

  const size = isHovered ? 400 : 40;

  return (
    <section className={styles.bg}>
      <motion.div
        className={styles.mask}
        animate={{
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,

          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
      >
        <div
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
        >
          <Image
            src="/images/newPrinciples.svg"
            width={600}
            height={600}
            alt="new principles"
            className={styles.newPrinciples}
          />
        </div>
      </motion.div>
      <div className={styles.body}>
        <div className={styles.bodyMobile}>
          <Image
            src="/images/newRealities.svg"
            width={600}
            height={600}
            alt="new realities"
            className={styles.newRealities}
          />
          <Image
            src="/images/newPrinciples.svg"
            width={600}
            height={600}
            alt="new realities"
            className={styles.newPrinciplesMobile}
          />
        </div>
      </div>
    </section>
  );
};

export default NewRealitiesSection;
