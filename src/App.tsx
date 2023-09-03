import { Alpaca } from "./Components/Alpaca";
import { Container } from "./styles/App";

export function App() {

  return (
      <Container>
      <header>
        <h1>Alpaca Generator</h1>
      </header>
      <main>
        <Alpaca />
      </main>
      <footer></footer>
    </Container>
  )
}

