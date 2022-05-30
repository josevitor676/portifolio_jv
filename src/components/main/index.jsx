import { Button, Link } from "@chakra-ui/react"
import { MainContainer } from "./style"

const Main = () => {
    return(
        <MainContainer className="classMain">
            <div>
                <h2>Sou um Deselvolvedor Front-End formado na Kenzie Academy Brasil</h2>
                <Link 
                color="#00A04A" 
                textDecor="underline" 
                cursor="pointer" 
                textAlign="center" 
                isExternal={true} 
                fontSize={["14px", "16px", "19px", "22px"]}
                href="https://docs.google.com/document/d/1QYGFScQBumyUgXn_o7Agcn_KBX4r7wd8Fnao9xypJZU/edit#"
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