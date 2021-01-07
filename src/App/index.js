import React from "react"

import * as G from "../Grid"
import * as S from "./styles"

const App = () => {
  return (
    <>
      <S.Global />
      <G.Helper />

      <G.Grid>
        <G.Column m={12}>
          <h1>Grid system (using styled-components)</h1>
          <h2>Block</h2>
        </G.Column>

        <G.Column m={12} t={6} d={3}>
          <S.Blue />
        </G.Column>

        <G.Column m={12}>
          <h2>Block with offset</h2>
        </G.Column>

        <G.Column m={12} t={6} t-offset={6} d={3} d-offset={3}>
          <S.Red />
        </G.Column>
        <G.Grid></G.Grid>
        <G.Column m={12}>
          <h2>Triptych with custom tags</h2>
        </G.Column>
      </G.Grid>

      <G.Grid as="ul">
        <G.Column as="li" m={12} t={4}>
          <S.Yellow />
        </G.Column>

        <G.Column as="li" m={12} t={4}>
          <S.Yellow />
        </G.Column>

        <G.Column as="li" m={12} t={4}>
          <S.Yellow />
        </G.Column>
      </G.Grid>

      <G.Grid>
        <G.Column m={12}>
          <h2>Nested grid</h2>
        </G.Column>

        <G.Column m={12} t={8} t-offset={2}>
          <S.Green>
            <G.Container as={S.NestedContainer}>
              <G.Column m={12} t={12 / 2}>
                <S.Red />
              </G.Column>

              <G.Column m={12} t={12 / 4} t-offset={12 / 4}>
                <S.Red />
              </G.Column>
            </G.Container>
          </S.Green>
        </G.Column>

        <G.Column m={12}>
          <h2>With sidebar</h2>
        </G.Column>
      </G.Grid>

      <S.Page>
        <G.Grid>
          <G.Column m={0} d={4}>
            <S.Sidebar>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                fringilla turpis libero, eget rutrum sem porta et. Duis
                malesuada congue lorem, non pretium est pellentesque in.
                Phasellus sapien metus, varius vitae libero bibendum, commodo
                ornare mi. Pellentesque eu pulvinar tellus. Nam vitae orci orci.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                quis cursus velit, nec scelerisque quam. Aliquam sit amet tortor
                semper nisi dignissim viverra at vel magna. Aliquam vitae
                pretium augue, et blandit dui. Etiam id enim non leo
                sollicitudin porttitor quis et felis. Vestibulum blandit odio
                nisl, at condimentum tortor hendrerit non. Duis venenatis
                ultrices est ut laoreet.
              </p>

              <form>
                <fieldset>
                  <legend>Lorem ipsum</legend>

                  <div>
                    <label htmlFor="lorem">Lorem</label>
                    <input id="lorem" placeholder="Lorem" type="text" />
                  </div>

                  <div>
                    <label htmlFor="ipsum">Ipsum</label>
                    <input id="ipsum" placeholder="Ipsum" type="text" />
                  </div>

                  <button type="submit">Dolor sit amet</button>
                </fieldset>
              </form>
            </S.Sidebar>
          </G.Column>

          <G.Column as={S.Content} m={12} d={8}>
            <G.Container>
              <G.Column m={12}>
                <h3>Lorem ipsum dolor sit amet</h3>
                <S.White />
              </G.Column>

              <G.Column m={12} t={12 / 2}>
                <S.Blue />
              </G.Column>

              <G.Column m={12} t={12 / 2}>
                <S.Blue />
              </G.Column>
            </G.Container>
          </G.Column>
        </G.Grid>
      </S.Page>
    </>
  )
}

export default App
