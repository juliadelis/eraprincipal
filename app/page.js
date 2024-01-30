"use client";
import React from "react";
import HeroSection from "@/components/heroSection/HeroSection";
import NewRealitiesSection from "@/components/newRealitiesSection/index.jsx";
import EraPrincipleSection from "@/components/eraPrincipleSection/index.jsx";
import VideoSection from "@/components/videoSection/index.jsx";
import ColorsSection from "@/components/colosSection/index.jsx";

import styles from "./page.module.css";
export default function Home() {
  return (
    <>
      <div className={styles.main}>
        <HeroSection />
        <NewRealitiesSection />
        <EraPrincipleSection />
        <VideoSection />
        <ColorsSection />
      </div>
    </>
  );
}
