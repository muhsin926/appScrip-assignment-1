import React from "react";
import style from "./style.module.css";
import Button from "../Elements/Button";

const EarnNow = () => {
  return (
    <section style={{position: 'relative', height: '35rem', overflow: 'hidden'}}>
      <div className={style.planet} style={{width: '68%', height: '160%'}}/>
      <div className={style.planet} style={{width: '78%', height: '170%'}}/>
      <div className={style.planet} style={{width: '88%', height: '180%'}}/>
      <div className={style.circle} />
      <div className={style.textBox}>
        <h1>Ready to Cash in Your Connections? <br/> Join Our Affiliate Program</h1>
        <p>
          Join now and get <span className={style.focusText}> 7.5%</span> commission on all creator referrals for the
          entire year.
        </p>
        <Button className='btn' >Earn Now</Button>
      </div>
    </section>
  );
};

export default EarnNow;
