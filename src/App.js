import Header from "./components/Header";
import { Container } from "./style";
import GlobalStyle from "./style/global"
import Main from "./components/main";
import About from "./components/About";
import Tecnology from "./components/Tecnology";
import { CarroselBox } from "./components/Carrousel";


function App() {
  return (
    <Container>
      <GlobalStyle/>
      <Header/>
      <Main/>
      <About/>
      <Tecnology/>
      <CarroselBox/>
    </Container>
  );
}

export default App;
