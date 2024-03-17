import "../styles/tuotteet.css";

function Tuotteet() {
  return (
    <div class="tuotteet-container" id="tuotteet">
      <div className="tuotteet-vasen">
      </div>
      <div className="tuotteet-oikea">
        <h1>Tuotteet</h1>
        <ul>
          <li>Laitteistomyynti
            <ul>
              <li>Henkilökohtaiset laitteistot (työ/tehotyöasemat, terminaalipäätteet, kannettavat- ja Tablet-laitteet)</li>
              <li>Tulostusratkaisut (tulostimet, tarra- ja kuittitulostimet, monikäyttölaitteet)</li>
              <li>Skannausratkaisut (kuva-, asiakirja-, arkistointijärjestelmän skannerit)</li>
              <li>Modulaariset konesalit, palo- ja murtosuojatut laite- ja arkistokaapit</li>
              <li>Konesalituotteet (palvelinräkit, KVM-ratkaisut, sammutusjärjestelmät, jäähdytysratkaisut, valvontajärjestelmät)</li>
              <li>Korotetut lattiat, seinien kaapeliläpivienti -ratkaisut</li>
              <li>Palvelinjärjestelmät (torni-, räkki- ja korttipalvelimet)</li>
              <li>Levyjärjestelmät (SAN, iSCSI, SAS, NAS)</li>
              <li>Tallennusratkaisut (pilvitallennus ja paikallisvarmistus)</li>
              <li>Kamera ja äänitekniikka (valvontakamerat, WEB kamerat, kaiuttimet, äänikortit)</li>
              <li>Esitystekniikka (näytöt, kosketusnäytöt, virtuaalilasit, videoprojektorit, esityskankaat-/taulut)</li>
              <li>Tarvikkeet (värikasetit, tulostus- ja piirturipaperit, laukut)</li>
              <li>Komponentit (tallennusmediat, muistit, varaosat, akut, näppäimistöt, hiiret)</li>
              <li>Verkkotuotteet (LAN-, WLAN, ADSL-, Bluetooth -tuotteet, palomuurit, kytkimet ja kaapelit)</li>
              <li>Virranhallintatuotteet (UPS laitteistot työasemista konesalituotteisiin)</li>
              <li>Teollisuustuotteet (Teollisuustietokoneet, suojatut kotelot, kosketusnäytöt, erikoisnäytöt)</li>
              <li>Viivakoodituotteet (tulostimet, lukijat)</li>
              <li>Ergonomiatuotteet</li>
            </ul>
          </li>
          <li>Ohjelmistot ja lisenssien hallinta
            <ul>
              <li>Ohjelmistolisenssisopimukset (mm. Microsoft, Google, Adobe, WithSecure)</li>
              <li>Pilvipalvelut (Office 365 ja Google Cloud Platform)</li>
              <li>Käyttöjärjestelmät (Windows, MacOS, Linux, ChromeOS)</li>
              <li>Sovellus- ja työryhmäohjelmistot (Microsoft, Google Workspace, Adobe)</li>
              <li>Kehitystyökalut</li>
              <li>Tietokantasovellukset (Microsoft)</li>
              <li>Tallennusohjelmistot (CA, Symantec)</li>
              <li>Virustorjunta/tietoturvaohjelmistot (WithSecure)</li>
              <li>Etäkäytön ohjelmistot (Terminal Server, Google Remote Desktop, Teamviewer, Open VPN)</li>
              <li>Virtualisointiohjelmistot (VMWare, Hyper-V)</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Tuotteet;