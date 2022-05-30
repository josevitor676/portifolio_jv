import { ContainerTecnology } from "./style"
import {SiJavascript, SiReact, SiGithub, SiHtml5, SiCss3, SiTypescript} from "react-icons/si"

const Tecnology = () => {
    return (
        <ContainerTecnology>
            <h4>Tecnologias </h4>
            <div>
                <p><SiJavascript/>JavaScript</p>
                <p><SiReact/>React</p>
                <p><SiGithub/>Git</p>
                <p><SiTypescript/>TypeScript</p>
                <p><SiHtml5/>HTML 5</p>
                <p><SiCss3/>CSS 3 </p>

            </div>
        </ContainerTecnology>
    )
}

export default Tecnology