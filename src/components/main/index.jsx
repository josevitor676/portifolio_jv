import { Link } from "@chakra-ui/react"
import { MainContainer } from "./style"

const Main = () => {
    return(
        <MainContainer id="home">
            <div>
                <h2>Sou um Deselvolvedor Front-End formado na Kenzie Academy Brasil</h2>
                <Link 
                color="#00A04A" 
                textDecor="underline" 
                cursor="pointer" 
                textAlign="center" 
                isExternal={true} 
                fontSize={["14px", "16px", "19px", "22px"]}
                href="https://www.canva.com/design/DAFE-8MDwvY/yfz1BvoVQJBSpvAdp3P_Qg/view?utm_content=DAFE-8MDwvY&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                >
                    Ver Curriculo
                </Link>
            </div>
            <div>
                <img src="https://s3.brand.com.br/media/cache/2a/84/2a8445e9b301279333d609060c8be0f0.png" alt="Desenvolvedor Front-End"/>
            </div>
        </MainContainer>
    )
}
export default Main