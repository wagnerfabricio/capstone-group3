import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: grid;
  place-items: center;
`;

export const Content = styled.div`
  max-width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 800px) {
    max-width: 80%;
    flex-direction: row;
  }
`;

export const ImageContainer = styled.div`
  width: 50%;
  display: block;
  padding: 20px;
  border-radius: 50%;

  img {
    max-width: 100%;
    height: auto;
    object-fit: contain;
  }

  @media (min-width: 800px) {
    height: 100vh;
    display: grid;
    place-items: center;
    border-radius: 0;
  }
`;

export const FormContainer = styled.div`
  display: grid;
  place-items: center;

  @media (min-width: 800px) {
    width: 50%;
    height: 100vh;
    padding: 20px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 500px;
  padding: 30px 20px;
  border: 1px solid #f2eded;
  border-radius: 8px;
  font-family: "Roboto", arial;

  h2 {
    font-family: "Roboto", arial;
    margin-bottom: 30px;
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
`;
