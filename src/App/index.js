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

        <G.Column d={3} m={12} t={6}>
          <S.Blue />
        </G.Column>

        <G.Column m={12}>
          <h2>Block with offset</h2>
        </G.Column>

        <G.Column d={3} d-offset={3} m={12} t={6} t-offset={6}>
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
          <h2>Nested triptych</h2>
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
      </G.Grid>
    </>
  )
}

export default App
