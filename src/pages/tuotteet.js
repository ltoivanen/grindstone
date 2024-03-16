import React, { useEffect, useState } from 'react';
import "../styles/tuotteet.css";

function Tuotteet() {
  return (
    <div class="tuotteet-container" id="tuotteet">
      <div className="tuotteet-vasen">
        <h1>Tietoa meistä</h1>
        <p>
          Olemme IT-järjestelmämyynnin ammattilaisia. Kokemuksemme asiakkaittemme IT-infran kehittämisestä ulottuu aina -90 luvun alkuun saakka. Asiakkaitamme ovat yritykset ja julkishallinnon yksiköt (esim kaupungit ja sairaanhoitopiirit) ympäri Suomea.
        </p>
      </div>
      <div className="tuotteet-oikea">

      </div>
    </div>
  );
}

export default Tuotteet;