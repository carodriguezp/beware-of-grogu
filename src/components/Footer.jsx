import { NavLink } from "react-router-dom"; //se pondra en cada etiqueta a

function Footer() {
    return (
        <footer className="footer">

            <NavLink className="footer__menu-item-link active backToGame" to="/instructions">¿Cómo se juega?</NavLink>

            <a href="https://www.linkedin.com/in/carolinarodrp" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-linkedin hover backToGame">  Linkedin</i>
            </a>
            <a href="https://github.com/carodriguezp" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-github hover backToGame">  Github</i>
            </a>

            <p className="copy backToGame">© Copyrigth 2024</p>
        </footer>
    )
}

export default Footer
