import Header from "./components/Header";
import { Container } from "./style";
import GlobalStyle from "./style/global"
import Main from "./components/main";
import About from "./components/About";


function App() {
  return (
    <Container>
      <GlobalStyle/>
      <Header/>
      <Main/>
      <About/>
    </Container>
  );
}

export default App;
