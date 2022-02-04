import styled from "styled-components";
import wallpaper from "../../assets/images/wallpaper.jpg";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: grid;
  background-image: url(${wallpaper});
  background-repeat: no-repeat;
  background-size: cover;
  place-items: center;
  color: #42918d;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.8);
  gap: 20px;
  width: 100%;
  padding: 30px 20px;
  border: 1px solid #f2eded;
  border-radius: 25px;
  font-family: "Roboto", arial;

  h2 {
    font-family: "Roboto", arial;
    margin-bottom: 30px;
    text-align: center;
  }

  input,
  text-area {
    background-color: #eceff1;
    border-radius: 8px;
    border-color: red;
    height: 27px;
  }

  div {
    margin-bottom: 5px;
  }

  button {
    color: #fff;
    font-size: 16px;
    margin-top: 10px;
    padding: 10px;
    height: 60px;
  }

  p {
    color: #bdbdbd;
    text-align: center;
    max-width: 70%;
    align-self: center;
  }
  @media (min-width: 1000px) {
    padding: 30px;
    max-width: 60%;
    .cadastroClient {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 20px;
    }
    .cadAvaliationClient {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-column-gap: 20px;
    }
  }
`;
