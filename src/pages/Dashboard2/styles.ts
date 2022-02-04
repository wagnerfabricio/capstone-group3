import styled from "styled-components";
import wallpaper from "../../assets/images/wallpaper.jpg";

export const Background = styled.div`
  height: 120vh;
  width: 100vw;
  box-sizing: border-box;
  background-image: url(${wallpaper});
  background-size: cover;
  background-position: center;

  .set {
    border-radius: 0 25px 25px 0;
  }

  @media (min-width: 1024px) {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 1000px) {
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    .set {
      border-radius: 0;
    }
  }
`;

export const Header = styled.header`
  background-color: #98343c;
  height: 15vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  
  }
  .divHeaderTitle {
    font-size: 0.9rem;
    font-family: Arial, Helvetica, sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
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
    justify-content: flex-end;
    align-items: center;
    color: white;

    section {
      display: flex;
      flex-direction: column;
      background-color: white;
      color: black;
      gap: 10px;
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
      width: 180px;
      height: 400px;
      display: flex;
      flex-direction: column;
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
  @media (max-width: 1000px) {
    h2 {
      font-size: 20px;
    }
    span {
      font-size: small;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 30%;
  height: 90%;
  padding-top: 7px;
  background-color: rgba(255, 255, 255, 0.842);
  @media (max-width: 1000px) {
    width: 100%;
  }
  form {
    width: 90%;
    margin-bottom: 20px;
  }

  .listHeaders1 {
    display: flex;

    width: 100%;
    text-align: center;
    justify-content: space-between;
    padding: 15px;
    h4 {
      font-size: small;
      @media (min-width: 1000px) {
        font-size: 16px;
      }
    }
  }
  .listHeaders2 {
    display: flex;
    width: 100%;
    text-align: center;
    justify-content: space-between;
    padding: 15px;
    h4 {
      font-size: small;
      @media (min-width: 1000px) {
        font-size: 16px;
      }
    }
  }

  h3,
  h4 {
    text-align: center;
    color: #42918d;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
  }
  div {
    width: 90%;
    display: flex;
    flex-direction: row;
  }

  .listaProducts {
    width: 80%;
    height: 230px;
    display: flex;
    flex-direction: row;
    overflow-x: scroll;
    overflow-y: hidden;
    *::-webkit-scrollbar {
      width: 12px;
    }
  }

  .content1 {
    padding: 10px;
    height: 50%;
    width: 90%;
    margin: 0 auto;
    margin-top: 20px;

    border-radius: 25px;
    display: flex;
    flex-direction: column;

    ul {
      padding-top: 15px;
      overflow-y: scroll;
      display: flex;
      flex-direction: column;
      height: auto;
      gap: 10px;
      li {
        background: white;
      }
    }
  }

  .content2 {
    padding: 10px;
    height: 50%;
    width: 90%;
    margin: 0 auto;
    margin-top: 20px;

    border-radius: 25px;
    display: flex;
    flex-direction: column;
    ul {
      padding-top: 15px;
      display: flex;
      flex-direction: column;
      height: auto;
      gap: 10px;
      overflow-y: scroll;
      li {
        background: white;

        padding: 0 30px;
        display: flex;
        justify-content: space-between;
        text-align: center;
        height: 45px;
        p {
          font-size: small;
          :first-child {
            width: 15%;
          }
          :nth-child(2) {
            width: 0;
          }
          :nth-child(3) {
            width: 55%;
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
  }
  .content3 {
    padding: 10px;
    height: 50%;
    width: 90%;
    margin: 0 auto;
    margin-top: 20px;

    border-radius: 25px;
    display: flex;
    flex-direction: column;

    ul {
      overflow-y: scroll;
      padding-top: 15px;
      display: flex;
      flex-direction: column;
      height: auto;
      gap: 10px;
      li {
        background: white;
        padding: 0 20px;
        justify-content: space-between;
      }
    }
  }

  .content4 {
    padding: 10px;
    height: 50%;
    width: 90%;
    margin: 0 auto;
    margin-top: 20px;

    border-radius: 25px;
    display: flex;
    flex-direction: column;

    form {
      width: 100%;
      display: flex;
      align-items: center;
      input {
        margin: 0 auto;
      }
    }
    ul {
      overflow-x: scroll;
      padding-top: 15px;
      display: flex;
      flex-direction: row;
      height: auto;
      gap: 10px;
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
export const Card = styled.div`
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
  /* @media (min-width: 740px) {
    width: 80%;
  }
  @media (min-width: 1024px) {
    height: 5vh;
    width: 80%;
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
  } */
`;
export const ServicesCard = styled.li`
  height: 20vh;
  min-width: 30%;
  margin: 5px;
  background-color: white;
  border: 0.5px solid #42918d;
  border-radius: 25px;
  display: flex;
  margin-bottom: 10px;

  div {
    margin: 0 auto;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-size: 0.9rem;
    flex-direction: column;
  }
  h6 {
    width: 80px;
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
`;
export const Input = styled.input`
  height: 4vh;
  width: 100%;
  background-color: white;
  border: 0.5px solid #42918d;
  border-radius: 15px;
  display: flex;
  justify-content: start;
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

  /* @media (min-width: 1024px) {
    height: 5vh;
    margin: 20px;
    background-color: white;
    border: none;
    border-radius: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1rem;
  } */
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
