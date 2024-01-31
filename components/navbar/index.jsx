"use client";
import React from "react";
import styles from "./style.module.css";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "../menuOverlay/MenuOverlay";
import { NAV_LINKS } from "@/constants/index";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className={styles.NavBar}>
      <div className={styles.Container}>
        <Link href="/">
          <Image src="/era-logo-black.svg" alt="logo" width={101} height={52} />
        </Link>

        <ul className={styles.menu}>
          {NAV_LINKS.map((link) => (
            <Link href={link.href} key={link.key} className={styles.itemMenu}>
              {link.label}
            </Link>
          ))}
        </ul>

        <div className={styles.menuHamburguer}>
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className={styles.botaoHamburguer}>
              <Image src="/menu-hamburguer.svg" height={20} width={20} />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className={styles.botaoHamburguer}>
              <Image src="/cruz.svg" height={18} width={19} />
            </button>
          )}
        </div>
        {navbarOpen ? <MenuOverlay /> : null}
      </div>
    </nav>
  );
};

export default Navbar;
