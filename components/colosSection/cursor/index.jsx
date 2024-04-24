"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./style.module.scss";

const colors = ["#C32D27", "#a842f9", "#1a54e8", "#F5C63F"];

export default function GradientCursor({ isActive }) {
  const mouse = useRef({ x: 0, y: 0 });
  const delayedMouse = useRef({ x: 0, y: 0 });
  const rafId = useRef(null);
  const circles = useRef([]);
  console.log({ isActive });
  const size = isActive ? 400 : 30;
  const delay = isActive ? 0.015 : 0.005;

  const lerp = (x, y, a) => x * (1 - a) + y * a;

  const manageMouseMove = (e) => {
    const { clientX, clientY } = e;

    mouse.current = {
      x: clientX,
      y: clientY,
    };
  };

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
      {[...Array(4)].map((_, i) => {
        return (
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
        );
      })}
    </div>
  );
}
