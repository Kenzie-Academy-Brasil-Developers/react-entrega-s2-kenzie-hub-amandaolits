import styled from "styled-components";

export const Container = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
  div {
    font-size: 0.75rem;
    margin-bottom: 15px;
    span {
      color: var(--primary);
      margin-left: 10px;
    }
  }
  input {
    background: var(--grey2);
    color: var(--grey-50);
    border: 1px solid var(--grey2);
    border-radius: 4px;
    width: 100%;
    height: 40px;
    font-size: 0.75rem;
    padding-left: 0.75rem;
    :focus {
      border: 1px solid var(--grey0);
      color: var(--grey0);
    }
  }
`;