"use client";

import React from "react";
import styles from "./style.module.scss";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <div className={styles.Container}>
        <Link href="/">
          <Image src="./era-logo-black.svg" alt="logo" width={74} height={74} />
        </Link>
        <p className={styles.rights}>@All Rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
