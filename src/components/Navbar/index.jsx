import Link from "next/link";
import React from "react";
import style from "./style.module.css";
import Button from "../Elements/Button";
import ToggleIcon from "@/assets/Icons/ToggleIcon";

const navTabs = [
  { title: "Home", to: "#", current: true },
  { title: "About Us", to: "#" },
  { title: "Our Blog", to: "#" },
  { title: "Support", to: "#" },
  { title: "Affiliate", to: "#" },
];

const programs = ['Agency', 'Ambassador', 'Partners']
const Navbar = () => {
  return (
    <header className={style.header}>
      <div className='logo'>lOGO</div>
      <nav className={style.navTabs}>
        {navTabs?.map((nav) => (
          <Link
            className={nav.current ? style.activeLink : style.link}
            href={nav.to}
          >
            {nav.title}
          </Link>
        ))}
        <select className={style.selectDropdown} name="" id="" >
            <option selected disabled value="#">Programs</option>
            {programs.map((program) => (
                <option value={program}>{program}</option>
            ))}
        </select>
      </nav>
      <div className={style.signBtn}>
        <div className={style.toggle}><ToggleIcon/></div>
        <Button className={style.loginBtn}>Login</Button>
        <Button className={style.signUp}>Sign Up</Button>
      </div>
    </header>
  );
};

export default Navbar;
