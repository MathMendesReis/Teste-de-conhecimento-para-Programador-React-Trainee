import { Container } from "./styled"
import logo from '../../assets/logo.png'
import { CardAlbuns } from "../../components/cardAlbuns"
import { Form } from "./form"


function Main() {
    return (
    <Container >
      <main>
        <header>
          <img src={logo} alt="" />
          <span>Discografia</span>
        </header>
        <main>
          <header>
            <Form/>
          </header>
          <main>
          <CardAlbuns/>
          </main>
        </main>
      </main>
    </Container>
    )
}

export default Main
