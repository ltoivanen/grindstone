import React, { useEffect, useState } from 'react';
import "../styles/meista.css";

function Meista() {
  return (
    <div class="meista-container" id="meista">
      <div className="meista-vasen">
      </div>
      <div className="meista-oikea">
        <h1>Tietoa meistä</h1>
        <p>
          Olemme IT-järjestelmämyynnin ammattilaisia. Kokemuksemme asiakkaittemme IT-infran kehittämisestä ulottuu aina -90 luvun alkuun saakka. Asiakkaitamme ovat yritykset ja julkishallinnon yksiköt (esim kaupungit ja sairaanhoitopiirit) ympäri Suomea.
        </p>
      </div>
    </div>
  );
}

export default Meista;