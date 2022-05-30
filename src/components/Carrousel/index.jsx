import {Swiper, SwiperSlide} from "swiper/react"
import { Navigation, Pagination, A11y } from "swiper"
import "swiper/css"
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "./style.css"
import KenzieContextApi from "../../assets/kenzieContextApi.png"
import hamburgueria from "../../assets/hamburgueria.png"
import Form from "../../assets/form.png"
import Hub from "../../assets/hub.png"
import Eventos from "../../assets/eventos.png"
import { ContainerCarrrosel } from "./Style";
 
const Projetos = [
    {
        name_Project : "Kenzie Shop Com Contenxt Api",
        desc: "Projeto Feito em React e Context API que simula uma loja Online",
        techs: ["React", "JavaScript", "Context-API", "Styled-Components"],
        img: KenzieContextApi,
        link_GitHub: "https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s3-kenzishop-com-context-api-josevitor676",
        link_Site:"https://kenzishop-com-context-api-nine.vercel.app/"
    },
    {
        name_Project : "Hamburgueria",
        desc: "Projeto Feito em React que simula uma loja de Fast Food",
        techs: ["React", "JavaScript","Styled-Components"],
        img: hamburgueria,
        link_GitHub: "https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s1-hamburgueria-da-kenzie-josevitor676",
        link_Site:"https://react-entrega-s1-hamburgueria-da-kenzie-parte03.vercel.app/"
    },
    {
        name_Project : "Formulario de Cadastro",
        desc: "Projeto de um Formulario com validações feito com yup e react-hook-form",
        techs: ["React", "JavaScript","Styled-Components", "React-Router-Dom", "Yup", "React-Hook-Form"],
        img: Form,
        link_GitHub: "https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s2-formulario-de-cadastro-josevitor676",
        link_Site:"https://react-entrega-s2-formulario-de-cadastro-peach.vercel.app/"
    },
    {
        name_Project : "Kenzie Hub",
        desc: "Projeto feito para o usuario poder adicionar tarefas para cumprir, ele pode editar as tarefas e também excluir as tarefas",
        techs: ["React", "JavaScript", "React-Router-Dom", "Yup", "React-Hook-Form", "Axios", "Styled-Componets", "React-Modal"],
        img: Hub,
        link_GitHub: "https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s2-kenzie-hub-josevitor676",
        link_Site:"https://react-entrega-s2-kenzie-hub-tau.vercel.app/"
    },
    {
        name_Project : "Administrador de Eventos",
        desc: "Projeto para Adiministração de eventos o usuario pode escolher bebidas para adiocionar na sua festa e pode também remover",
        techs: ["React", "JavaScript", "React-Router-Dom", "Axios", "Styled-Componets"],
        img: Eventos,
        link_GitHub: "https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s3-administracao-de-eventos-josevitor676",
        link_Site:"https://administrador-eventos-context-api.vercel.app/"
    },


]

export const CarroselBox = () =>{
    return (
        <>
            <Swiper 
            className="classProjects"
            slidesPerView={1}
            modules={[Navigation, Pagination, A11y]}
            navigation={true}
            pagination={{ clickable: false }}
            >
                {Projetos.map((projeto) => (
                    <SwiperSlide>
                        <ContainerCarrrosel>
                        <img src={projeto.img} alt={projeto.name_Project} />
                        <h1><span>Nome do Projeto:</span> {projeto.name_Project}</h1>
                        <p><span>Descrição:</span> {projeto.desc}</p>
                        <ul>
                            Tecnologia Usada:
                            {projeto.techs.map((tec) => (
                                <li>{tec},</li>
                            ))}
                        </ul>
                        <span>Link para <a href={projeto.link_GitHub} target="_blank">Git-Hub</a></span>
                        <span>Link para <a href={projeto.link_Site} target="_blank">Site</a></span>
                        </ContainerCarrrosel>
                    </SwiperSlide>
               ) )}
            </Swiper> 
        </>
    )
}
