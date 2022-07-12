import { Link } from "react-scroll/modules"
import { HeaderContainer } from "./style"

const Header = () => {
    return(
        <HeaderContainer>
            <div>
               <h1>Jose Vitor</h1>
            </div>
            <div>
                <Link 
                to="home"
                spy
                smooth
                offset={50}
                duration={500}
                >
                    Home
                </Link>
                <Link 
                to="sobre"
                spy
                smooth
                offset={50}
                duration={500}
                >
                    Sobre
                </Link>
                <Link 
                to="projetos"
                spy
                smooth
                offset={50}
                duration={500}
                >
                    Projetos
                </Link>
                <a href="https://linktr.ee/jose_vitorz" target="_blank">Contatos</a>
            </div>
        </HeaderContainer>
    )
}

export default Header