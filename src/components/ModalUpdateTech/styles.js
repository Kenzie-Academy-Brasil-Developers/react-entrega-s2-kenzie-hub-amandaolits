import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1000;
`;

export const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  background: var(--grey3);
  width: 340px;
  max-width: 90%;
  border-radius: 4px;
`;

export const ModalHeader = styled.div`
  height: 50px;
  background: var(--grey2);
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;
  border-radius: 4px 4px 0 0px;
  > h1 {
    font-weight: bold;
    font-size: 14px;
    line-height: 24px;
  }
  > button {
    background: var(--grey2);
    border: none;
    color: var(--grey1);
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  > form {
    padding: 0 20px 25px;
    text-align: left;
    > label {
      font-size: 0.75rem;
      margin-bottom: 15px;
    }
  }
  input {
    height: 50px;
  }
  button {
    margin-top: 30px;
    height: 50px;
  }
`;

export const FakeInput = styled.div`
  margin-top: 13px;
  background: var(--grey2);
  height: 50px;
  border-radius: 4px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 12px;
  color: var(--grey-50);
  > h2 {
    font-style: normal;
    font-weight: normal;
    font-size: 16.2426px;
    line-height: 26px;
    color: var(--grey-50);
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
    height: 50px;
    font-size: 0.75rem;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    font-style: normal;
    font-weight: normal;
    font-size: 16.2426px;
    line-height: 26px;
    :hover {
      cursor: pointer;
    }
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  button + button {
    width: 32%;
  }
  button {
    width: 63%;
    margin-top: 20px;
  }
`;