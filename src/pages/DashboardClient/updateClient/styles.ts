import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  place-items: center;
  padding: 20px 0px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 100%;
  max-width: 500px;
  padding: 30px 20px;
  border: 1px solid #f2eded;
  border-radius: 8px;
  margin-bottom: 20px;
  font-family: "Roboto", arial;
  justify-content: center;
  .closeButton {
    color: red;
    height: 40px;
    width: 40px;
  }
  .headerModal {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    h2 {
      margin: 0;
    }
  }
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

    a {
      color: #bdbdbd;
      font-weight: bold;

      :hover {
        text-decoration: underline;
      }
    }
  }
`;
