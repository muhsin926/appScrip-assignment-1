import Link from "next/link";
import React from "react";
import Button from "../Button";
import style from "./style.module.css";

const navTabs = [
  { title: "Home", to: "#", current: true },
  { title: "About Us", to: "#" },
  { title: "Our Blog", to: "#" },
  { title: "Support", to: "#" },
  { title: "Affiliate", to: "#" },
];
const Navbar = () => {
  return (
    <header className={style.header}>
      <div className={style.logo}>Logo</div>
      <nav className={style.navTabs}>
        {navTabs?.map((nav) => (
          <Link
            className={nav.current ? style.activeLink : style.link}
            href={nav.to}
          >
            {nav.title}
          </Link>
        ))}
      </nav>
      <div className={style.signBtn}>
        <Button className={style.loginBtn}>Login</Button>
        <Button className={style.signUp}>Sign Up</Button>
      </div>
    </header>
  );
};

export default Navbar;
