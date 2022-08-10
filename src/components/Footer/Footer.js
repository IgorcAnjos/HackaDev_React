import './Footer.css';

import { CgCopyright } from 'react-icons/cg';
import { BsGithub } from 'react-icons/bs';

import logo from './logo_kingsman.png'

const Footer = () => {
    return (
        <footer className="rodape">
            <div className="copyright">
                <CgCopyright />
                <p>Copyright</p>
            </div>
            <a className="git-logo" href="https://github.com/alveskt/-HackaDev" target="_blank" rel="noreferrer">
                <BsGithub />
            </a>

            <div className="desenvolvedores">
                <h3>Desenvolvido Por:</h3>
                <p>Augusto Angelo</p>
                <p>Gustavo Alves</p>
                <p>Gustavo Henrique</p>
                <p>Igor Anjos</p>
                <p>Simon Assagra</p>
                <img
                    className="logo-rodape"
                    src={logo}
                    alt="logo-rodape"
                />
            </div>
        </footer>
    )
}

export default Footer;