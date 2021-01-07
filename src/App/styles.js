import styled, { createGlobalStyle } from "styled-components"

import { breakpoints } from "../core/layout"

const Block = styled.div`
  border-radius: 8px;
  padding: 50% 0;
`

export const Content = styled.div`
  padding-bottom: 40px;
  padding-top: 40px;
`

export const NestedContainer = styled.div`
  align-items: center;
`

export const Page = styled.div`
  background-color: lightGray;
`

export const Sidebar = styled.div`
  display: none;

  @media screen and (min-width: ${breakpoints.d}px) {
    display: block;
    min-height: 100%;
    padding: 40px 0;
    padding-right: 24px;
    position: relative;
    z-index: 0;

    &:before {
      content: "";
      background-color: white;
      position: absolute;
      left: -100vw;
      top: 0;
      bottom: 0;
      right: 0;
      z-index: -1;
    }
  }
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

export const White = styled(Block)`
  background-color: white;
  border: 1px solid darkGray;
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

  h3 {
    margin-top: 0;
  }

  p {
    margin: 0;
  }

  ul,
  li {
    list-style-type: none;
  }
`
