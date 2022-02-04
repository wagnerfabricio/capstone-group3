import styled from "styled-components";
import wallpaper from "../../assets/images/wallpaper.jpg";

export const Container = styled.div`
  background-image: url(${wallpaper});
  display: flex;
  flex-direction: column;
  min-height: 120vh;
  h4,
  h3,
  h5 {
    color: #42918d;
  }
  h3 {
    //text-decoration: underline;
    //font-style: italic;
  }
  @media (min-width: 1000px) {
    padding: 40px;
    height: 100%;
    min-height: 100vh;
    background-size: cover;
    background-position: center;

    justify-content: center;
    align-items: center;
  }
`;

export const PlannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-items: center;
  gap: 30px;
  @media (min-width: 1000px) {
    flex-direction: row;
    justify-content: center;
    width: 90%;
    height: 80vh;
    gap: 0;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  background: #a06b79;

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
  @media (min-width: 900px) {
    height: 70px;
  }
`;

export const Aside = styled.header`
  background-color: #98343c;
  width: 100%;
  height: 15vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;

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

  @media (min-width: 1000px) {
    box-sizing: border-box;
    width: 30%;
    height: 80vh;
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
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
      .divMenu2{
        background-color: transparent;
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

export const Content = styled.div`
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 95%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.842);
  gap: 20px;
  border-radius: 25px;

  .listHeaders {
    display: flex;
    justify-content: space-between;
    width: 95%;
    padding: 0 10px;
    text-align: left;
    h4 {
      font-size: small;
      @media (min-width: 1000px) {
        font-size: 16px;
      }
    }
  }

  ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 10px;
    gap: 10px;
    overflow-y: scroll;
    height: 300px;
    ::-webkit-scrollbar {
      width: 10px;
    }
    ::-webkit-scrollbar-thumb {
      /* background: linear-gradient(to bottom, #c9bc8e 0%, #B7A76A 100%); */
      background: linear-gradient(to bottom, #fed066 0%, #fdb73d 100%);
      border-radius: 6px;
    }
    li {
      padding: 10px;
      display: flex;
      justify-content: space-between;
      text-align: left;
      height: 45px;

      p {
        font-size: small;
        :first-child {
          width: 10%;
        }
        :nth-child(2) {
          width: 30%;
        }
        :nth-child(3) {
          width: 30%;
        }
        :nth-child(4) {
          width: 15%;
        }
        :nth-child(5) {
          width: 15%;
        }
      }
    }
  }

  @media (min-width: 1000px) {
    padding: 20px;
    border-radius: 0;
    h3 {
      margin-top: 20px;
    }
    ul {
      height: auto;
      margin-bottom: 30px;
      padding: 20px;
      li > p {
        font-size: 16px;
      }
    }
  }
`;

export const SearchContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 95%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.842);
  gap: 20px;
  margin-bottom: 20px;
  border-radius: 25px;
  p {
    font-size: small;
  }
  ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 10px;
    gap: 10px;
    overflow-y: scroll;
    height: 300px;
    ::-webkit-scrollbar {
      width: 10px;
    }
    ::-webkit-scrollbar-thumb {
      /* background: linear-gradient(to bottom, #c9bc8e 0%, #B7A76A 100%); */
      background: linear-gradient(to bottom, #fed066 0%, #fdb73d 100%);
      border-radius: 6px;
    }
  }
  button {
    border: none;
    background: none;
  }
  li {
    background-color: #80cbc4;
    :hover {
      background-color: #4db6ac;
    }
  }
  @media (min-width: 1000px) {
    padding: 20px;
    margin-bottom: 0;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    input {
      margin-top: 20px;
    }
    ul {
      height: auto;
      margin-bottom: 30px;
      padding: 20px;
    }
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
`;
