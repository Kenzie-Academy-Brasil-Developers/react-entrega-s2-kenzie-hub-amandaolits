import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
  }
  :root {
    --grey4: #121214;
    --grey3: #212529;
    --grey2: #343B41;
    --grey1: #868E96;
    --grey0: #F8F9FA;
    --success: #3fe864;
    --negative: #e83f5b;
    --primary: #FF577F;
    --primary-focus: #FF427F;
    --primary-negative: #59323F;
  }
  body {
    background: var(--grey4);
    color: var(--grey0);
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 100vh;
  }
  h1, h2, h3, h4, h5, h6 {
    font-weight: bold;
  }
  button {
    cursor: pointer;
  }
  a {
    text-decoration: none;
  }
`;