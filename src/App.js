import Header from "./components/Header";
import { Container } from "./style";
import GlobalStyle from "./style/global"
import Main from "./components/main";
import About from "./components/About";
import Tecnology from "./components/Tecnology";
import { CarroselBox } from "./components/Carrousel";
import { Footer } from "./components/Footer";
import { Info } from "./components/Info";
import { Email } from "./components/Email";


function App() {
  return (
    <Container>
      <GlobalStyle/>
      <Header/>
      <Main/>
      <About/>
      <Info/>
      <Tecnology/>
      <CarroselBox />
      <Email/>
      <Footer/>
    </Container>
  );
}

export default App;
