import { Link } from 'react-scroll'
import "../styles/grindstone.css";
import logo from "../media/grindstone logo-1.png"
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive'
import Hamburger from 'hamburger-react'



function Navigation() {
  const [click, setClick] = useState(false)
  const isoNaytto = useMediaQuery({
    query: '(min-width: 800px)'
  })

  const handleClick = () => {
    setClick(!click)
  }

  return (
    <nav class="nav-container">
      <div className="nav-start">
        <img src={logo} alt="Logo" class="logo" />
        <div className="burger-icon">
        <Hamburger toggled={click} toggle={setClick} color="#a5a5a5"/>
        </div>
      </div>
      {(click || isoNaytto) &&
        <ul class="nav-menu">
          <li class="nav-item">
            <Link to="etusivu" smooth={true} offset={-100} duration={500} class="nav-link" onClick={handleClick}>Etusivu</Link>
          </li>
          <li class="nav-item">
            <Link to="meista" smooth={true} offset={-85} duration={500} class="nav-link" onClick={handleClick}>Tietoa meistä</Link>
          </li>
          <li class="nav-item">
            <Link to="palvelut" smooth={true} offset={-85} duration={500} class="nav-link" onClick={handleClick}>Palvelut</Link>
          </li>
          <li class="nav-item">
            <Link to="tuotteet" smooth={true} offset={-85} duration={500} class="nav-link" onClick={handleClick}>Tuotteet</Link>
          </li>
          <li class="nav-item">
            <Link to="footer" smooth={true} offset={-85} duration={500} class="nav-link" onClick={handleClick}>Yhteystiedot</Link>
          </li>
          <li class="nav-item">
            <Link to="footer" smooth={true} offset={-85} duration={500} class="nav-link" onClick={handleClick}>Yhteistyökumppanit</Link>
          </li>
        </ul>
      }
    </nav>
  )
}

export default Navigation