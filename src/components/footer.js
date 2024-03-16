import React, { useEffect, useState } from 'react';
import "../styles/grindstone.css";

function Footer() {
    return (
        <div class="footer-container" id="footer">
            <div class="vasen">
                <ul class="yhteystiedot">
                    <li>Kiljusenkaari 7</li>
                    <li>73310 Tahkovuori</li>
                    <li>040 064 0628</li>
                    <li>sales@grindstone.fi</li>
                </ul>
            </div>

            <div class="oikea">
             <a href="https://www.lenovo.com/fi/fi/"><img class="logot" src="https://upload.wikimedia.org/wikipedia/commons/0/03/Lenovo_Global_Corporate_Logo.png" /></a>

            </div>

        </div>
    );
}

export default Footer;