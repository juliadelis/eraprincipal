"use client";

import { useRef, useEffect } from "react";
import React from "react";
import styles from "./style.module.scss";

const VideoSection = () => {
  const container = useRef(null);
  const stickyMask = useRef(null);
  const initialMaskSize = 0.5;
  const targetMaskSize = 20;
  const easing = 0.25;
  let easedScrollProgress = 0;

  useEffect(() => {
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    const maskSizeProgress = targetMaskSize * getScrollProgress();
    stickyMask.current.style.webkitMaskSize =
      (initialMaskSize + maskSizeProgress) * 100 + "%";

    console.log(maskSizeProgress);
    requestAnimationFrame(animate);
  };

  const getScrollProgress = () => {
    const scrollProgress =
      stickyMask.current.getBoundingClientRect().top /
      (window.innerHeight - container.current.getBoundingClientRect().height);
    const delta = scrollProgress - easedScrollProgress;

    console.log({
      boudH: container.current.getBoundingClientRect().height,
      windowInnerHeight: window.innerHeight,
      bottom:
        container.current.getBoundingClientRect().height - window.innerHeight,
      refSticky: stickyMask.current,
      sticky: stickyMask.current.offsetTop,
    });
    console.log({ easing });
    easedScrollProgress += delta * easing;
    return easedScrollProgress;
  };

  return (
    <section className={styles.section}>
      <div ref={container} className={styles.container}>
        <div ref={stickyMask} className={styles.stickyMask}>
          <video autoPlay muted loop>
            <source src="/images/era.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
