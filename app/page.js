"use client";
import React from "react";
import HeroSection from "@/components/heroSection/HeroSection";
import NewRealitiesSection from "@/components/newRealitiesSection/index.jsx";
import EraPrincipleSection from "@/components/eraPrincipleSection/index.jsx";
import VideoSection from "@/components/videoSection/index.jsx";
import ColorsSection from "@/components/colosSection/index.jsx";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";

import styles from "./page.module.css";
import VideoMobile from "@/components/videomobile";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);
  return (
    <>
      <div className={styles.main}>
        <HeroSection />
        <NewRealitiesSection />
        <EraPrincipleSection />
        <VideoSection />
        {/* <VideoMobile /> */}
        <ColorsSection />
      </div>
    </>
  );
}
