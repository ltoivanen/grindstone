import { useState } from "react";
import "../styles/contact.css";

function Contact() {
    const [sposti, setSposti] = useState("")
    const [viesti, setViesti] = useState("")

    return (
        <div className="contact-container">
            <form className="contact-form">
                <h1>Ota yhteyttä</h1>
                <label>
                    Sähköposti:
                    <input type="text" className="textfield" value={sposti}
                        onChange={(e) => { setSposti(e.target.value) }} />
                </label>
                <label>Viesti:
                    <textarea cols="30" rows="10" onChange={(e) => { setViesti(e.target.value) }}></textarea>
                </label>
                <div className="button-container">
                    <button className="contact-button" onClick={(e) => e.preventDefault()}>Lähetä</button>
                    <button className="contact-button" onClick={(e) => e.preventDefault()}>Peruuta</button>
                </div>
            </form>
        </div>
    );
}

export default Contact;