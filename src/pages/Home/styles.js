import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
`;

export const Content = styled.div`
  padding: 50px 30px;
  background: var(--grey3);
  color: var(--primary);
  width: 400px;
  max-width: 90%;
  line-height: 1.8rem;
  h1 {
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-size: 2.5rem;
    margin-bottom: 1.8rem;
  }
  span {
    color: var(--grey0);
  }
  div {
    margin-top: 1.8rem;
    flex: 1;
    display: flex;
    margin-top: 1rem;
    button + button {
      margin-left: 1rem;
    }
  }
`;