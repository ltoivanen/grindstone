import { Link } from 'react-scroll'
import "../styles/grindstone.css";
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive'
import Hamburger from 'hamburger-react'


function Navigation() {
  const [click, setClick] = useState(false)
  const isoNaytto = useMediaQuery({
    query: "(min-width: 1090px)"
  })

  const handleClick = () => {
    setClick(!click)
  }

  return (
    <nav class="nav-container">
      <div className="nav-start">
        <Link className="logo" to="etusivu" smooth={true} offset={-100} duration={500}>
          <img src={process.env.PUBLIC_URL + "/grindstone logo.png"} alt="Logo" class="logo"/>
        </Link>
        <div className="burger-icon">
          <Hamburger toggled={click} toggle={setClick} color="#a5a5a5" />
        </div>
      </div>
      {(click || isoNaytto) &&
        <ul class="nav-menu" id="a">
          <li class="nav-item">
            <Link to="etusivu" smooth={true} offset={-100} duration={500} class="nav-link" onClick={handleClick}>Etusivu</Link>
          </li>
          <li class="nav-item">
            <Link to="meista" smooth={true} offset={-79} duration={500} class="nav-link" onClick={handleClick}>Tietoa meistä</Link>
          </li>
          <li class="nav-item">
            <Link to="palvelut" smooth={true} offset={-79} duration={500} class="nav-link" onClick={handleClick}>Palvelut</Link>
          </li>
          <li class="nav-item">
            <Link to="tuotteet" smooth={true} offset={-79} duration={500} class="nav-link" onClick={handleClick}>Tuotteet</Link>
          </li>
          <li class="nav-item">
            <Link to="footer" smooth={true} offset={-79} duration={500} class="nav-link" onClick={handleClick}>Yhteystiedot</Link>
          </li>
          <li class="nav-item">
            <Link to="footer" smooth={true} offset={-79} duration={500} class="nav-link" onClick={handleClick}>Kumppanit</Link>
          </li>
        </ul>
      }
    </nav>
  )
}

export default Navigation