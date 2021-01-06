import React, { useEffect, useState } from "react"
import styled, { css } from "styled-components"

import * as breakpoints from "../core/breakpoints"

export const columnsCount = 12

const gutterWidths = { m: 8, t: 16, d: 24 }
const maxWidth = 1280
const sideMargins = { m: 16, t: 32, d: 64 }

export const Grid = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  max-width: ${maxWidth}px;
  padding-left: ${sideMargins.m - gutterWidths.m / 2}px;
  padding-right: ${sideMargins.m - gutterWidths.m / 2}px;
  z-index: 999;

  ${Object.entries(breakpoints).map(
    ([name, width]) => css`
      @media screen and (min-width: ${width}px) {
        padding-left: ${sideMargins[name] - gutterWidths[name] / 2}px;
        padding-right: ${sideMargins[name] - gutterWidths[name] / 2}px;
      }
    `
  )}
`

export const Column = styled.div`
  ${(props) =>
    Object.entries(breakpoints).reduce(
      (previous, [name, width]) => [
        ...previous,
        css`
          flex-basis: ${(100 / columnsCount) * (props.m ?? 1)}%;
          max-width: ${(100 / columnsCount) * (props.m ?? 1)}%;
          padding-left: ${gutterWidths.m / 2}px;
          padding-right: ${gutterWidths.m / 2}px;

          ${props.hasOwnProperty("m-offset") &&
          css`
            margin-left: ${(100 / columnsCount) * props["m-offset"] ?? 0}%;
          `}

          @media screen and (min-width: ${width}px) {
            padding-left: ${gutterWidths[name] / 2}px;
            padding-right: ${gutterWidths[name] / 2}px;

            ${props.hasOwnProperty(name) &&
            css`
              flex-basis: ${(100 / columnsCount) * (props?.[name] ?? 1)}%;
              max-width: ${(100 / columnsCount) * (props?.[name] ?? 1)}%;
            `}

            ${props.hasOwnProperty(`${name}-offset`) &&
            css`
              margin-left: ${(100 / columnsCount) * props[`${name}-offset`] ??
              0}%;
            `}
          }
        `,
      ],
      [
        css`
          box-sizing: border-box;
        `,
      ]
    )}
`

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 ${-gutterWidths.m / 2}px;

  ${Object.entries(breakpoints).map(
    ([name, width]) => css`
      @media screen and (min-width: ${width}px) {
        margin: 0 ${-gutterWidths[name] / 2}px;
      }
    `
  )}
`

export const Helper = () => {
  const [isVisible, setIsVisible] = useState(
    window?.localStorage?.getItem("x-grid") === "true" ?? false
  )

  useEffect(() => {
    document.addEventListener("keydown", handleKeydown, false)

    return () => document.removeEventListener("keydown", handleKeydown, false)
  }, [])

  useEffect(() => {
    window.localStorage.setItem("x-grid", isVisible)
  }, [isVisible])

  const handleKeydown = (event) => {
    if (event.keyCode !== 71) {
      return
    }

    setIsVisible((isVisible) => !isVisible)
  }

  return (
    isVisible && (
      <div
        style={{
          height: "100%",
          left: 0,
          pointerEvents: "none",
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 999,
        }}
      >
        <Grid>
          {new Array(12).fill().map((_, index) => (
            <Column key={index}>
              <div
                style={{
                  backgroundColor: "rgba(255, 99, 71, 0.25)",
                  minHeight: "100vh",
                }}
              />
            </Column>
          ))}
        </Grid>
      </div>
    )
  )
}
