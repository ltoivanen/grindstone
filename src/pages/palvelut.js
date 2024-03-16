import React, { useEffect, useState } from 'react';
import "../styles/palvelut.css";
import "../styles/grindstone.css";


function Palvelut() {
    return (
        <div class="palvelut-container" id="palvelut">
            <div class="palvelut-vasen">
            </div>
            <div class="palveut-keski">
                <h1>Palvelut</h1>
                <p>
                    Erikoisosaamistamme ovat
                </p>
                <ul>
                    <li>IBM palvelin-, levyjärjestelmä- ja varmistusratkaisut</li>
                    <li>Rittal Rimatrix -konesalituotteet:
                        <ul>
                            <li>Laitekaapit</li>
                            <li>Jäähdytysratkaisut; ilma- ja vesilämmönvaihtimet</li>
                            <li>UPS-varavirtajärjestelmät ja virransyöttöratkaisut</li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div class="palvelut-oikea">
            </div>
        </div>
    );
}

export default Palvelut;