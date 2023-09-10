import { Alpaca } from "./Components/Alpaca";
import { Buttons } from "./Components/Buttons";
import { FooterButtons } from "./Components/FooterButtons";
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
      <footer>
        <FooterButtons/>
      </footer>
    </Container>
  )
}

