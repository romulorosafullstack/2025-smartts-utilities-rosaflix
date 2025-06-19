import { createGlobalStyle } from "styled-components";

const Reset = createGlobalStyle`
  html{
    font-size: 62.5%;
    font-family: Arial, Helvetica, sans-serif;
  }

  *,
  *:after,
  *:before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    text-decoration: none;
  }

  body{
    -webkit-font-smoothing: antialiased;
    font: inherit;
    font-size: 100%;
    line-height: 1;
    list-style-type: none;
  }

  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }

  ol,
  ul {
    list-style: none;
  }

  h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }

  p {
    overflow-wrap: break-word;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  #root,
  #__next {
    isolation: isolate;
  }
`

export default Reset
