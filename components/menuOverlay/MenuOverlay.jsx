import React from "react";
import styles from "./style.module.scss";
import Link from "next/link";
import { NAV_LINKS } from "@/constants";

const MenuOverlay = () => {
  return (
    <ul className={styles.menuOverlay}>
      {NAV_LINKS.map((link) => (
        <Link
          href={link.href}
          key={link.key}
          className={styles.linkMenuOverlay}>
          {link.label}
        </Link>
      ))}
    </ul>
  );
};

export default MenuOverlay;
