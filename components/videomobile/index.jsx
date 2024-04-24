"use client";
import React, { useRef, useEffect, useState } from "react";
import styles from "./style.module.scss";

const VideoMobile = () => {
  return (
    <section id="videoSection" className={styles.section}>
      <div className={styles.container}>
        <video id="video" muted autoPlay loop>
          <source src="/images/era.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default VideoMobile;
