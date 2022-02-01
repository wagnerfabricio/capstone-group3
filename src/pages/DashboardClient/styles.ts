import styled from "styled-components";
import wallpaper from "../../assets/images/wallpaper.jpg";
import asideDashImage from "../../assets/images/test1.svg";

export const Background = styled.div`
  height: 120vh;
  width: 100vw;
  box-sizing: border-box;
  background-image: url(${wallpaper});
  background-size: cover;
  background-position: center;

  @media (min-width: 1024px) {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export const Header = styled.header`
  background-color: #98343c;
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

  @media (min-width: 1024px) {
    height: 90vh;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    background: linear-gradient(180deg, #98343c 50%, white 50%);
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
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
      display: flex;
      flex-direction: column;
      background-color: transparent;
      color: black;
      overflow-y: scroll;
      overflow-x: hidden;
      border-radius: 0px;
      height: 45vh;
      width: 20vw;
      margin: 0px;

      h3 {
        color: #42918d;
        font-family: Arial, Helvetica, sans-serif;
        height: 50px;
        margin-top: 150px;
      }
      p {
        margin: 10px;
      }
    }
  }
`;
export const Container = styled.div`
  height: 80vh;
  width: auto;
  padding-top: 7px;
  margin: 10px;
  background-color: rgba(255, 255, 255, 0.842);
  border-radius: 25px;
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  form {
    width: 89%;
    display: flex;

    button {
      position: relative;
      background-color: transparent;
      right: 11vw;
      color: #42918d;
      border: none;
      border-radius: 50%;
      padding: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  h3 {
    color: #42918d;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
  }
  div {
    width: 90%;
    display: flex;
    flex-direction: row;
  }
  section {
    max-height: 40vh;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
  }
  ul {
    width: 85%;
    max-height: 230px;
    display: flex;
    overflow-x: scroll;
    overflow-y: hidden;
    *::-webkit-scrollbar {
      width: 12px;
    }
  }
  div {
    display: flex;
    flex-direction: row;
  }
  @media (min-width: 500px) {
    height: 80vh;
    width: 65%;
    margin: 0 auto;
    margin-top: 20px;
    background-color: #f3f3f3e0;
    border-radius: 25px;

    h3 {
      margin: 15px;
    }
    div {
      width: 80%;
    }
    form {
      button {
        right: 7vw;
      }
    }
  }
  @media (min-width: 740px) {
    height: 80vh;
    width: 70%;
    margin: 0 auto;
    margin-top: 20px;
    background-color: #f3f3f3e0;
    border-radius: 25px;

    h3 {
      margin: 15px;
    }
    div {
      width: 80%;
    }
    form {
      button {
        right: 6vw;
      }
    }
  }
  @media (min-width: 1024px) {
    height: 90vh;
    width: 40vw;
    margin: 0px;
    padding: 0;
    background-color: #f3f3f3e0;
    border-radius: 0;
    h3 {
      margin: 15px;
    }
    div {
      width: 80%;
    }
    form {
      button {
        right: 5vw;
      }
    }
  }
  @media (min-width: 1174px) {
    form {
      button {
        right: 4vw;
      }
    }
  }
`;
export const Footer = styled.footer`
  height: 25vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  div {
    width: 95%;
    background-color: rgba(255, 255, 255, 0.842);
    padding: 20px;
    border-radius: 25px;
  }
  h3 {
    color: #42918d;
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
  }
  @media (min-width: 500px) {
    width: 70%;
    margin: 0 auto;
  }
  @media (min-width: 740px) {
    width: 75%;
    margin: 0 auto;
  }
  @media (min-width: 1024px) {
    display: none;
  }
`;
export const Card = styled.li`
  height: 5vh;
  width: 80%;
  margin: 10px;
  background-color: white;
  border: 0.3px solid #42918d;
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    margin: 0.95rem;
    font-size: 0.9rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  @media (min-width: 740px) {
    width: 80%;
  }
  @media (min-width: 1024px) {
    height: 5vh;
    width: 90%;
    margin: 10px;
    background-color: white;
    border: none;
    border-radius: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      margin: 15px;
      font-size: 1rem;
    }
  }
`;
export const ServicesCard = styled.li`
  height: 20vh;
  min-width: 30%;
  margin: 5px;
  background-color: white;
  border: 0.5px solid #42918d;
  border-radius: 25px;
  display: flex;

  div {
    margin: 0 auto;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-size: 0.9rem;
    flex-direction: column;
  }
  h6 {
    width: 90px;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  img {
    width: 40px;
    height: 40px;
    margin-top: 7px;
  }
  button {
    background-color: #42918d;
    color: white;
    border: none;
    border-radius: 50%;
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (min-width: 740px) {
    h6 {
      font-size: 0.9rem;
      width: 100px;
    }
    button {
      padding: 10px;
    }
    img {
      width: 50px;
      height: 50px;
      margin-top: 7px;
    }
  }
  @media (min-width: 1024px) {
    width: 35%;
    margin: 10px;
    border: none;
    border-radius: 25px;
    display: flex;

    div {
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 1rem;
      flex-direction: column;
    }
    h6 {
      font-family: Arial, Helvetica, sans-serif;
      margin-top: 10px;
      width: 120px;
      padding: 5px;
      font-size: 0.9rem;
      text-align: center;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    img {
      border: 1px solid #42918d;
      border-radius: 50%;
      width: 60px;
      height: 60px;
      margin-top: 10px;
    }
    button {
      margin-top: 10px;
      margin-bottom: 10px;
      padding: 10px;
    }
  }
`;
export const Input = styled.input`
  height: 4vh;
  width: 90%;
  margin: 10px;
  background-color: white;
  border: 0.5px solid #42918d;
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #afafaf;
  }

  p {
    margin: 15px;
    font-size: 0.8rem;
  }

  @media (min-width: 1024px) {
    height: 5vh;
    margin: 20px;
    background-color: white;
    border: none;
    border-radius: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1rem;
  }
`;
export const AsideRight = styled.aside`
  display: none;
  @media (min-width: 1024px) {
    display: inline;
    height: 90vh;
    width: 20%;
    background-image: url(${asideDashImage});
    background-size: cover;
    background-position: center;
    margin: 0;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
  }
`;
