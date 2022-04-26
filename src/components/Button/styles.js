import styled from "styled-components";

export const Container = styled.button`
  background: var(${(props) => props.colorSchema});
  color: #ffffff;
  height: 40px;
  box-sizing: border-box;
  border: none;
  border-radius: 4px;
  margin-top: 16px;
  width: 100%;
  transition: 0.2s;
  :hover {
    background: var(${(props) => props.colorSchemaHover});
  }
`;