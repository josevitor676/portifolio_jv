import { HeaderContainer } from "./style"

const Header = () => {
    return(
        <HeaderContainer>
            <div>
               <h1>Jose Vitor</h1>
            </div>
            <div>
                <a href="#">Home</a>
                <a href="#">Sobre</a>
                <a href="#">Projetos</a>
                <a href="#">Contatos</a>
            </div>
        </HeaderContainer>
    )
}

export default Header