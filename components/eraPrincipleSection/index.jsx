"use client";
import { useLayoutEffect, useRef } from "react";
import styles from "./style.module.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Picture1 from "../../public/images/ioana-1.png";
import Picture2 from "../../public/images/ioana-2.png";
import Picture3 from "../../public/images/ioana-3.png";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);
const images = [Picture1, Picture2, Picture3];

const EraPrincipleSection = () => {
  const container = useRef(null);

  const title1 = useRef(null);

  const lettersRef = useRef([]);

  const imagesRef = useRef([]);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const tl = gsap
        .timeline({
          scrollTrigger: {
            trigger: container.current,

            start: "top bottom",

            end: "bottom top",

            scrub: true,
          },
        })

        .to(imagesRef.current, { y: -50 }, 0)

        .to(imagesRef.current[1], { y: 120 }, 0)

        .to(imagesRef.current[2], { y: -90 }, 0);

      lettersRef.current.forEach((letter, i) => {
        tl.to(
          letter,
          {
            top: Math.floor(Math.random() * -75) - 25,
          },
          0
        );
      });
    });

    return () => context.revert();
  }, []);

  return (
    <section id="sobreEra"  className={styles.section}>
      <div  className={styles.Container}>
        <div className={styles.images}>
          <span>onde o invisível é visível</span>
          {images.map((image, i) => {
            return (
              <div
                key={`i_${i}`}
                ref={(el) => (imagesRef.current[i] = el)}
                className={styles.imageContainer}>
                <Image src={image} placeholder="blur" alt="image" />
              </div>
            );
          })}
        </div>
        <div className={styles.body}>
          <h2>era principle</h2>
          <p>
            ERA tem como missão{" "}
            <strong>trazer pessoas para o centro da experiência digital</strong>{" "}
            simplificando a tecnologia de realidade aumentada,{" "}
            <strong>
              revolucionando o consumo de moda no Brasil utilizando da RA como
              um pilar de inovação,
            </strong>{" "}
            tecnologia e experiência
          </p>
        </div>
      </div>
    </section>
  );
};

export default EraPrincipleSection;
