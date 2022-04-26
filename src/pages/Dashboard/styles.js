import styled from "styled-components";

export const ParenteContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const ContainerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 70px;
  padding: 5%;
  @media (min-width: 600px) {
    padding: 2% 30%;
  }
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

export const ContainerUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 130px;
  border-top: 1px solid var(--grey3);
  border-bottom: 1px solid var(--grey3);
  padding: 5%;
  @media (min-width: 600px) {
    padding: 2% 30%;
  }
  h1 {
    text-transform: capitalize;
    font-weight: bold;
    font-size: 18px;
    line-height: 28px;
    margin-bottom: 10px;
  }
  span {
    color: var(--grey1);
    font-size: 12px;
    line-height: 22px;
  }
`;

export const ContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5%;
  height: 80px;
  @media (min-width: 600px) {
    padding: 2% 30%;
  }
  h2 {
    font-weight: 600;
    font-size: 16px;
    line-height: 18px;
  }
  > button {
    margin: 0;
    width: 35px;
    height: 35px;
    font-size: 25px;
  }
`;

export const TechsContainer = styled.div`
  background: var(--grey3);
  border-radius: 4px;
  margin: 0 5%;
  display: flex;
  flex-direction: column;
  @media (min-width: 600px) {
    margin: 0 30%;
  }
`;

export const TechContainer = styled.div`
  background: var(--grey4);
  margin: 8px;
  border-radius: 4px;
  height: 50px;
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  :hover {
    background: var(--grey2);
    cursor: pointer;
  }
  @media (min-width: 600px) {
    margin: 10px;
    padding: 20px;
  }
  h3 {
    font-weight: bold;
    font-size: 14.2123px;
    line-height: 24px;
  }
  span {
    font-size: 12.182px;
    line-height: 22px;
    color: var(--grey1);
  }
`;