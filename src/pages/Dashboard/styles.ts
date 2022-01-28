import styled from "styled-components";

export const Container = styled.div`
  background: #42918d;
  height: 100%;
  min-height: 100vh;

  background-size: cover;
  background-position: center;
  h4,
  h3,
  h5 {
    color: #42918d;
  }
  h3 {
    //text-decoration: underline;
    //font-style: italic;
  }
`;

export const HeaderContainer = styled.div`
  width: 100%;
  height: 70px;
  background: #a06b79;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border: 2px solid black;
    border-radius: 50%;
  }
  h2 {
    color: white;
  }
`;

export const PlannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 20px;
  height: 80vh;
  @media (min-width: 900px) {
    flex-direction: row;
    justify-content: center;

    gap: 50px;
  }
`;

export const Content = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;

  align-items: center;
  width: 95%;
  max-width: 439px;
  height: 330px;
  background-color: rgba(255, 255, 255, 0.842);
  border-radius: 36px;
  gap: 20px;
  p {
    font-size: small;
  }
  ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 10px;
    gap: 10px;
  }
`;

export const Lista = styled.li`
  padding: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  height: 40px;
  border: 1px solid #42918d;
  border-radius: 50px;
`;

export const SearchContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 95%;
  max-width: 439px;
  height: 330px;
  background-color: rgba(255, 255, 255, 0.842);
  border-radius: 36px;
  gap: 20px;
  p {
    font-size: small;
  }
  ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 10px;
    gap: 10px;
  }
`;

export const Pesquisa = styled.input`
  border-radius: 28px;
  padding: 15px;
  width: 100%;

  cursor: text;
  border: 1px solid #42918d;
`;

export const ListaPesquisa = styled.li`
  padding: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  border-radius: 50px;
  cursor: pointer;
  &:nth-child(odd) {
    background-color: rgba(66, 145, 141, 0.5);
  }
  &:nth-child(even) {
    background-color: rgba(66, 145, 141, 0.2);
  }
`;
