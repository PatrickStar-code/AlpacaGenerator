import { Alpaca } from "./Components/Alpaca";
import { Buttons } from "./Components/Buttons";
import { Container } from "./styles/App";

export function App() {

  return (
      <Container>
      <header>
        <h1>Alpaca Generator</h1>
      </header>
      <main>
        <Alpaca />
        <Buttons />
      </main>
      <footer></footer>
    </Container>
  )
}

