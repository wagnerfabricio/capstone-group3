import styled from "styled-components";
import wallpaper from "../../assets/images/wallpaper.jpg";
import asideDashImage from "../../assets/images/test1.svg";

export const Background = styled.div`
  height: 135vh;
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

  .divMenu {
    margin-right: 5px;
    height: 60px;
    width: 60px;
  }
  .divMenu2 {
    margin: 0;
    background-color: transparent;
    height: 60px;
    width: 60px;
  }
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
  section {
    margin-left: 7px;
  }
  @media (min-width: 500px) {
    section {
      padding: 10px;
    }
    .divMenu {
      margin: 0;
      height: 120px;
      width: 120px;
    }
    .divMenu2 {
      background-color: transparent;
      height: 100px;
      width: 150px;
    }
  }
  @media (min-width: 500px) {
    .divMenu {
      margin-right: 10px;
      height: 100px;
      width: 100px;
    }
    .divMenu2 {
      background-color: transparent;
      height: 100px;
      width: 150px;
    }
  }

  @media (min-width: 1024px) {
    margin-left: 10px;
    height: 90vh;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    background: linear-gradient(180deg, #98343c 50%, white 50%);
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
    align-items: center;
    color: white;
    padding: 10px 0;
    .divMenu {
      margin-top: 10px;
      height: 120px;
      width: 120px;
    }
    .divMenu2 {
      background-color: transparent;
      height: 100px;
      width: 150px;
    }
    .divHeaderTitle {
      background: transparent;
      margin: 0;
      width: 100%;
      height: 80px;
    }
    section {
      margin: 15px;
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
      border-radius: 0px;
      height: 45vh;
      width: 100%;
      margin: 0px;

      h3 {
        color: #42918d;
        font-family: Arial, Helvetica, sans-serif;
      }
      ul {
        width: 100%;
        overflow-y: scroll;
        overflow-x: hidden;
        height: 40vh;
        ::-webkit-scrollbar {
          width: 10px;
        }
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #fed066 0%, #fdb73d 100%);
          border-radius: 6px;
        }
      }

      li {
        border: 0px;
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      p {
        margin: 10px;
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
`;
export const Container = styled.div`
  height: 85vh;
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

  .servicesList {
    margin-bottom: 10px;
  }

  .servicesList ul {
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    overflow-x: hidden;
    gap: 10px;
    width: 100%;
    padding: 0 10px;

    li {
      justify-content: space-between;
      padding: 10px;
      background-color: white;
    }
    p {
      width: 50%;
    }
  }

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
  h2 {
    color: #42918d;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
    padding: 7px;
    font-size: 1.2rem;
  }
  div {
    width: 90%;
    display: flex;
    flex-direction: row;
  }
  section {
    max-height: 40vh;
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
  }

  div {
    display: flex;
    flex-direction: row;
  }
  @media (min-width: 500px) {
    height: 85vh;
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
    height: 85vh;
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
    margin: 0;
    padding: 0;
    background-color: #f3f3f3e0;
    border-radius: 0;
    h2 {
      margin-top: 35px;
      margin-bottom: 18px;
      font-size: 1.5rem;
    }
    div {
      width: 80%;
    }
    form {
      height: 60px;
      margin-bottom: 10px;

      input {
        margin-top: 0;
      }
      button {
        bottom: 7px;
        right: 5vw;
      }
    }
    .servicesList {
      margin-bottom: 0px;
    }
    .servicesList ul {
      ::-webkit-scrollbar {
        width: 10px;
      }
      ::-webkit-scrollbar-thumb {
        background: linear-gradient(to bottom, #fed066 0%, #fdb73d 100%);
        border-radius: 6px;
      }
    }
    ul {
      ::-webkit-scrollbar {
        width: 10px;
      }
      ::-webkit-scrollbar-thumb {
        background: linear-gradient(to bottom, #5fb6b2 0%, #42918d 100%);
        border-radius: 6px;
      }
    }
    li {
      border: 0px;
    }
  }
  @media (min-width: 1174px) {
    form {
      button {
        right: 3.5vw;
        margin-right: 15px;
      }
    }
  }
`;
export const Footer = styled.footer`
  height: 35vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: white;
  padding-top: 5px;

  div {
    display: flex;
    flex-direction: column;
    background-color: transparent;
    color: black;
    border-radius: 0px;
    height: 35vh;
    margin: 0px;
    overflow-y: scroll;
    overflow-x: hidden;
    width: 95%;

    h3 {
      color: #42918d;
      text-align: center;
      font-family: Arial, Helvetica, sans-serif;
    }
    ul {
      padding: 10px;
    }
    li {
      width: 100%;
      margin: 7px auto;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;

      p {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
  @media (min-width: 500px) {
    width: 65%;
    margin: 0 auto;
    margin-top: 20px;
    border-radius: 15px;
  }
  @media (min-width: 740px) {
    width: 70%;
    margin: 0 auto;
    margin-top: 20px;
    border-radius: 15px;
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
    margin: 7px auto;
    width: 90%;
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
      width: 100%;
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
      width: 100%;
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
    margin-right: 10px;
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
export const NotFoundService = styled.div`
  width: 100%;
  height: 35vh;
  background-color: white;
  border-radius: 15px;
  margin: 10px;

  section {
    display: flex;
    flex-direction: row;
    width: 100%;
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    text-align: center;

    img {
      height: 35vh;
      border-top-right-radius: 15px;
      border-bottom-right-radius: 15px;
      width: 100%;
      background-size: cover;
      background-position: center;
    }
    h3 {
      color: black;
    }
    p {
      color: #706f74;
      font-size: 13px;
      text-align: center;
    }
  }

  @media (min-width: 1024px) {
    width: 90%;
    height: 35vh;
    background-color: white;
    border-radius: 15px;
    margin: 10px;

    section {
      display: flex;
      flex-direction: row;
      width: 100%;
    }
    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      text-align: center;

      img {
        height: 35vh;
        border-top-right-radius: 15px;
        border-bottom-right-radius: 15px;
        width: 110%;
        background-size: cover;
        background-position: center;
      }
      h3 {
        color: black;
      }
      p {
        color: #706f74;
        font-size: 13px;
        text-align: center;
      }
    }
  }
`;
