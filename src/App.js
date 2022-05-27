import Header from "./components/Header";
import { Container } from "./style";
import GlobalStyle from "./style/global"

function App() {
  return (
    <Container>
      <GlobalStyle/>
      <Header/>
    </Container>
  );
}

export default App;
