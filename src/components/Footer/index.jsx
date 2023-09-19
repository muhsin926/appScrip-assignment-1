import React from 'react'
import style from './style.module.css'
import { FOOTER_CONTENT } from '@/constants'
import FacebookIcon from '@/assets/Icons/FacebookIcon'
import TwitterIcon from '@/assets/Icons/TwitterIcon'
import InstagramIcon from '@/assets/Icons/InstagramIcon'
import YoutubeIcon from '@/assets/Icons/YoutubeIcon'

const Footer = () => {
  return (
    <footer className={style.container}>
        <div className={style.logo} >lOGO</div>
       { 
         FOOTER_CONTENT.map((data,i) => (
            <div key={i}>
                <h3>{data.title}</h3>
                {data.content.map((text, i) => (
                    <p key={i}>{text}</p>
                ))}
            </div>
         ))
       }
       <div className={style.followUp}>
        <div>
        <h3>Follow Us</h3>
        <div className='flex'>
            <FacebookIcon/>
            <TwitterIcon/>
            <InstagramIcon/>
            <YoutubeIcon/>
        </div>
        </div>
       </div>
    </footer>
  )
}

export default Footer