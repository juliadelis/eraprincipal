"use client";
import React, { useRef, useEffect, useState } from "react";
import styles from "./style.module.scss";

const VideoSection = () => {
  const container = useRef(null);
  const stickyMask = useRef(null);
  const [easedScrollProgress, setEasedScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollProgress =
        stickyMask.current.getBoundingClientRect().top /
        (window.innerHeight - container.current.getBoundingClientRect().height);
      setEasedScrollProgress(scrollProgress);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="videoSection" className={styles.section}>
      <div ref={container} className={styles.container}>
        <div
          ref={stickyMask}
          className={styles.stickyMask}
          style={{
            WebkitMaskSize: `${(0.5 + 4 * easedScrollProgress) * 550}%`,
          }}>
          <video id="video" muted autoPlay loop>
            <source src="/images/era.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
