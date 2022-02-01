import styled from "styled-components";
import wallpaper from "../../assets/images/wallpaper.jpg";

export const Container = styled.div`
  background-image: url(${wallpaper});
  padding: 40px;
  height: 100%;
  min-height: 100vh;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
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

export const Aside = styled.header`
  background-color: #98343c;
  height: 15vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  box-sizing: border-box;
  span {
    font-size: 0.9rem;
    font-family: Arial, Helvetica, sans-serif;
  }
  p {
    font-family: Arial, Helvetica, sans-serif;
  }
  h2 {
    font-family: Arial, Helvetica, sans-serif;
  }

  section {
    margin: 15px;
  }
  div {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background-color: white;
    margin: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    width: 50px;
  }
  .footerDesktop {
    display: none;
  }

  @media (min-width: 1024px) {
    height: 80vh;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    background: linear-gradient(180deg, #98343c 50%, white 50%);
    display: flex;
    flex-direction: column-reverse;
    justify-content: flex-end;
    align-items: center;
    color: white;

    section {
      margin-top: 50px;
      background-color: white;
      color: black;
      padding: 15px;
      padding: 40px 15px 40px 15px;
      border-radius: 10px;
    }
    div {
      margin-top: 40px;
      width: 140px;
      height: 140px;
      img {
        width: 70px;
      }
    }
    .footerDesktop {
      width: 280px;
      height: 400px;
      display: flex;
      flex-wrap: wrap;
      background-color: transparent;
      color: black;
      h3 {
        color: #42918d;
        font-family: Arial, Helvetica, sans-serif;
      }
      p {
        margin: 10px;
      }
    }
  }
`;

export const PlannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 80vh;
  @media (min-width: 900px) {
    flex-direction: row;
    justify-content: center;
    width: 90%;
    height: 80vh;
  }
`;

export const Content = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;

  align-items: center;
  width: 95%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.842);

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
  height: 100%;
  background-color: rgba(255, 255, 255, 0.842);
  border-top-right-radius: 36px;
  border-bottom-right-radius: 36px;
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
