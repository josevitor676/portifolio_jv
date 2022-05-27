import Header from "./components/Header";
import { Container } from "./style";
import GlobalStyle from "./style/global"
import Main from "./components/main";

function App() {
  return (
    <Container>
      <GlobalStyle/>
      <Header/>
      <Main/>
    </Container>
  );
}

export default App;
