"use client";
import React from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import { motion, useSpring } from "framer-motion";
import { useState } from "react";
import useMousePosition from "@/utils/useMousePosition";
import { useMotionValue } from "framer-motion";

const NewRealitiesSection = () => {
  const spring = {
    stiffness: 150,

    damping: 15,

    mass: 0.1,
  };

  const mousePosition = {
    x: useSpring(0, spring),
    y: useSpring(0, spring),
  };

  const mouseMove = (e) => {
    const { clientX, clientY } = e;
    const targetX = clientX - (window.innerWidth / 2) * 0.25;
    const targetY = clientY - (window.innerWidth / 2) * 0.3;
    mousePosition.x.set(targetX);
    mousePosition.y.set(targetY);
  };

  //const { x, y } = mousePosition;

  const [isHovered, setIsHovered] = useState(false);

  const size = isHovered ? 400 : 40;

  return (
    <section onMouseMove={mouseMove} className={styles.bg}>
      <motion.div className={styles.mask} mousePosition={mousePosition}>
        <div
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}>
          <Image
            src="/images/newPrinciples.svg"
            width={600}
            height={600}
            alt="new principles"
          />
        </div>
      </motion.div>
      <div className={styles.body}>
        <div>
          <Image
            src="/images/newRealities.svg"
            width={600}
            height={600}
            alt="new realities"
          />
        </div>
      </div>
    </section>
  );
};

export default NewRealitiesSection;
