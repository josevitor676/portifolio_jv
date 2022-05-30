import {FaLinkedin, FaTwitter,FaInstagram} from "react-icons/fa"
import { InfoContent } from "./style"
export const Info = () => {
    return (
        <InfoContent>
            <ul>
                <li><span>Nome</span>: Jose Vitor da Silva Santos</li>
                <li><span>Idade</span>: 20 Anos</li>
                <li><span>Endereço</span>: Maringá, Paraná, Brasil</li>
                <li><span>Telefone</span>: 18 - 991335192</li>
                <li><span>E-mail</span>: jvss1036@gmail.com</li>
            </ul>
            <div>
                Redes Sociais 
                <ul>
                    <li><FaLinkedin/> <a href="https://www.linkedin.com/in/jose-vitor-da-silva-santos-775671209/" target="_blank">Linkedin</a></li>
                    <li><FaTwitter/> <a href="https://twitter.com/JosVito94376254" target="_blank">Twitter</a></li>
                    <li><FaInstagram/> <a href="https://www.instagram.com/jose_vitorzss/" target="_blank">Instagram</a></li>
                </ul>
            </div>
        </InfoContent>
    )
}