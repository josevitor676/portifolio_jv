import { ContainerTecnology } from "./style"
import {SiJavascript, SiReact, SiGithub, SiHtml5, SiCss3, SiTypescript, SiRedux} from "react-icons/si"

const Tecnology = () => {
    return (
        <ContainerTecnology className="classTecnology">
            <h4>Tecnologias </h4>
            <div>
                <p><SiReact/>React</p>
                <p><SiRedux/>Redux</p>
                <p><SiJavascript/>JavaScript</p>
                <p><SiGithub/>Git</p>
                <p><SiTypescript/>TypeScript</p>
                <p><SiHtml5/>HTML 5</p>
                <p><SiCss3/>CSS 3 </p>

            </div>
        </ContainerTecnology>
    )
}

export default Tecnology