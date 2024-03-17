import "../styles/grindstone.css";
import "../styles/contact.css";
import Contact from "./contact";
import { useState } from "react";

function Footer() {
    return (
        <div class="footer-container" id="footer">
            <div class="vasen">
                <ul class="yhteystiedot">
                    <li>Kiljusenkaari 7</li>
                    <li>73310 Tahkovuori</li>
                    <li>040 064 0628</li>
                    <li>sales@grindstone.fi</li>
                    <li><Contact/></li>
                </ul>
            </div>

            <div class="footer-oikea">
                <a href="https://www.lenovo.com/fi/fi/" target="_blank"><img class="logot" src="../grindstone/kumppanit/IDG_Authorized_200x150.webp"/></a>
                <a href="https://www.lenovo.com/fi/fi/" target="_blank"><img class="logot" src="../grindstone/kumppanit/ISG_Authorized_200x150.webp"/></a>
                <a href="https://www.cisco.com/" target="_blank"><img class="logot" src="../grindstone/kumppanit/cisco-partner-logo-select-provider-300x274.webp"/></a>
                <a href="https://www.withsecure.com/fi/home" target="_blank"><img class="logot" src="../grindstone/kumppanit/withsecure_logo_charcoal_black.png"/></a>
            </div>
        </div>
    );
}

export default Footer;