import "../styles/palvelut.css";
import "../styles/grindstone.css";


function Palvelut() {
    return (
        <div class="palvelut-container" id="palvelut">
            <div class="palvelut-vasen">
                <h1>Palvelut</h1>
                <p>
                    Erikoisosaamistamme ovat
                </p>
                <ul>
                    <li>Asiantuntija- ja järjestelmäpalvelut
                        <ul>
                            <li>Migraatiopalvelut (esim. Windows Server 202x ja virtualisointiympäristöt)</li>
                            <li>Laitteisto- ja ohjelmistoasennukset</li>
                            <li>Kuitu-, lähiverkko- ja WLAN-asennus ja konfigurointi</li>
                            <li>Tukipalvelut</li>
                        </ul>
                    </li>
                    <li>Tekninen konsultointi ja projektointi
                        <ul>
                            <li>Virtualisointi (VMWare, Hyper-V)</li>
                            <li>Levyjärjestelmät (SAN, iSCSI, SAS, NAS)</li>
                            <li>Etäkäyttöratkaisut (RDP, Google Remote Desktop, Teamviewer, Open VPN yms.)</li>
                            <li>Työasemien vakiointi ja mallinnus</li>
                        </ul>
                    </li>
                    <li>Asennuskeskuspalvelut
                        <ul>
                            <li>Palvelinlaitteistojen esiasennus</li>
                            <li>Työasemien esiasennus, vakiointi, mallinnus ja paketointi</li>
                        </ul>
                    </li>
                    <li>Rahoituspalvelut
                        <ul>
                            <li>Grenke Leasing</li>
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