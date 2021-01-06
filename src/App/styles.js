import styled, { createGlobalStyle } from "styled-components"

const Block = styled.div`
  padding: 50% 0;
`

export const NestedContainer = styled.div`
  align-items: center;
`

export const Blue = styled(Block)`
  background-color: cyan;
  border: 1px solid blue;
`

export const Green = styled(Block)`
  background-color: lightGreen;
  border: 1px solid green;
`

export const Red = styled(Block)`
  background-color: tomato;
  border: 1px solid red;
`

export const Yellow = styled(Block)`
  background-color: beige;
  border: 1px solid yellow;
`

export const Global = createGlobalStyle`
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    margin: 0;
    padding: 0;
  }

  * {
    box-sizing: border-box;
  }

  ul,
  li {
    list-style-type: none;
  }
`
