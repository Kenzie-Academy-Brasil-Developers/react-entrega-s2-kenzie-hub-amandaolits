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
  justify-content: space-between;
  width: 100%;
  h2 {
    font-size: 1.4rem;
    color: var(--primary);
  }
  button {
    font-size: 0.7rem;
    width: 90px;
    height: 30px;
    margin-top: 0px;
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
  span {
    font-size: 0.75rem;
    color: var(--grey1);
  }
  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: space-between;
    align-items: flex-start;
    button {
      margin-top: 40px;
    }
  }
`;

export const SelectorContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
  label {
    font-size: 0.75rem;
    margin-bottom: 15px;
  }
  select {
    background: var(--grey2);
    color: var(--grey-50);
    border: 1px solid var(--grey2);
    border-radius: 4px;
    width: 100%;
    height: 40px;
    font-size: 0.75rem;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }
`;