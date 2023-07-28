import { Container } from "./styled"
import logo from '../../assets/logo.png'
import { CardAlbuns } from "../../components/cardAlbuns/inde"

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
            <label htmlFor="">
              <span>Digite uma palavra</span>
              <div>
                  <input type="text" />
                  <button type="submit">Procurar</button>
              </div>
            </label>
          </header>
          {/* // */}
          <main>
          <CardAlbuns/>
          </main>
        {/* // */}
        </main>
      </main>
    </Container>
    )
}

export default Main
