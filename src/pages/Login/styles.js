import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 320px;
  max-width: 92vw;
  height: 100vh;
`;

export const ContainerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  h2 {
    font-size: 1.4rem;
    color: var(--primary);
  }
`;

export const Content = styled.div`
  margin-top: 20px;
  padding: 14px;
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  background: var(--grey3);
  justify-content: space-between;
  h1 {
    margin: 10px;
    font-size: 1.1rem;
  }
  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: space-between;
    align-items: flex-start;
    > button {
      margin-top: 25px;
    }
  }
  span {
    margin-top: 25px;
    color: var(--grey1);
    font-weight: 600;
    font-size: 9.62602px;
    line-height: 14px;
  }
  button {
  }
`;