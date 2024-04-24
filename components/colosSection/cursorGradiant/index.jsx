"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./style.module.scss";
import { motion } from "framer-motion";
import { useState } from "react";
import useMousePosition from "@/utils/useMousePosition";

const colors = ["#c32d27", "#f5c63f", "#457ec4", "#356fdb"];

export default function Cursor({ isActive }) {
  const [isHovered, setIsHovered] = useState(false);

  const { x, y } = useMousePosition();

  const size = isHovered ? 400 : 40;

  const animate = () => {
    const { x, y } = delayedMouse.current;

    delayedMouse.current = {
      x: lerp(x, mouse.current.x, 0.075),
      y: lerp(y, mouse.current.y, 0.075),
    };

    moveCircles(delayedMouse.current.x, delayedMouse.current.y);

    rafId.current = window.requestAnimationFrame(animate);
  };

  const moveCircles = (x, y) => {
    if (circles.current.length < 1) return;
    circles.current.forEach((circle, i) => {
      gsap.set(circle, { x, y, xPercent: -50, yPercent: -50 });
    });
  };

  useEffect(() => {
    animate();
    window.addEventListener("mousemove", manageMouseMove);
    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
      window.cancelAnimationFrame(rafId.current);
    };
  }, [isActive]);

  return (
    <div className={styles.Container}>
      <motion.div
        className={styles.mask}
        animate={{
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,

          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}>
        <div
          style={{
            backgroundColor: colors[i],
            width: size,
            height: size,

            filter: `blur(${isActive ? 20 : 2}px)`,
            transition: `transform ${
              (4 - i) * delay
            }s linear, height 0.3s ease-out, width 0.3s ease-out, filter 0.3s ease-out`,
          }}
          className={styles.mouse}
          key={i}
          ref={(ref) => (circles.current[i] = ref)}
        />
      </motion.div>
    </div>
  );
}
