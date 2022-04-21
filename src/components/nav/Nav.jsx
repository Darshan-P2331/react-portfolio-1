import React, { useState } from 'react'
import './nav.css'
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'

const Nav = () => {
  const [activeNow, setActiveNow] = useState("#")

  return (
    <nav>
      <a className={activeNow === '#' ? 'active' : ""} onClick={() => setActiveNow("#")} href="#"><AiOutlineHome /></a>
      <a className={activeNow === '#about' ? 'active' : ""} onClick={() => setActiveNow("#about")} href="#about"><AiOutlineUser /></a>
      <a className={activeNow === '#experience' ? 'active' : ""} onClick={() => setActiveNow("#experience")} href="#experience"><BiBook /></a>
      <a className={activeNow === '#portfolio' ? 'active' : ""} onClick={() => setActiveNow("#portfolio")} href="#portfolio"><RiServiceLine /></a>
      <a className={activeNow === '#contact' ? 'active' : ""} onClick={() => setActiveNow("#contact")} href="#contact"><BiMessageSquareDetail /></a>
    </nav>
  )
}

export default Nav