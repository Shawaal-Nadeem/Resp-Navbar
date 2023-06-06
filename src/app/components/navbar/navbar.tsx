'use client'
import Link from "next/link"
import Style from './navbar.module.css';
import { useState } from "react";
export default function Navbar()
{
  const [now,update]=useState('now');
  const before=(
    <header className={Style.header}>
        <nav>
        <h1>Shawaal Nadeem</h1>
          <ul>
           <Link href={'/'}><li>Home</li></Link>
           <Link href={'/about'}><li>About</li></Link>
           <Link href={'/contact'}><li>Contact</li></Link>
          </ul>
        </nav>
      </header>
  );
  const after=(
    <div className={Style.mobileview}>
      <div>
      <ul>
      <Link href={'/'}><li onClick={()=>update('now')}>Home</li></Link>
           <Link href={'/about'}><li onClick={()=>update('now')}>About</li></Link>
           <Link href={'/contact'}><li onClick={()=>update('now')}>Contact</li></Link>
      </ul>
      </div>
 

      
      </div>
  )
 
    return (
      <div>
        <button className={Style.p} type="button" onClick={()=>update(now === 'now' ? 'mobile' : 'now')}>Burger Menu</button>
      {now==='now' ?before:after}
      </div>
    )
}