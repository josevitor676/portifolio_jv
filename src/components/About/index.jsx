import { ContainerAbout } from "./style"
import jose from "../../assets/jose3.png"
const About = () => {
    return (
        <ContainerAbout>
            <div>
                <img src={jose} alt="Jose Vitor"/>
            </div>
            <div>
                <h4>Sobre <span>Mim</span></h4>
                <p>Meu contato com tecnologia começou através do meu primo que já trabalhava na área e me mostrou como funcionava e a partir desse dia comecei a estudar programação e fazer cursos. Gosto da área porque com a programação posso mudar a vida de várias pessoas com meus softwares e aplicativos meus objetivos são resolver problemas e conseguir ajudar muitas pessoas através da programação</p>
            </div>
            <ul>
                <li><span>Nome</span>: Jose Vitor da Silva Santos</li>
                <li><span>Idade</span>: 20 Anos</li>
                <li><span>Endereço</span>: Maringá, Paraná, Brasil</li>
                <li><span>Telefone</span>: 18 - 991335192</li>
                <li><span>E-mail</span>: jvss1036@gmail.com</li>
            </ul>
        </ContainerAbout>
    )
}

export default About