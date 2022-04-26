import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
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
  margin-bottom: 5px;
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
  }
  input {
    height: 50px;
  }
  button {
    margin-top: 30px;
    height: 50px;
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
  }
`;