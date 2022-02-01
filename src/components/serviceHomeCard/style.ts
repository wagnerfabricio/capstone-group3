import styled from "styled-components";

export const Container = styled.div`
  width: 20%;
  max-width: 300px;
  height: 50%;
  max-height: 350px;
  background-color: #a12c67;
  margin: 0;
  color: #ffffff;
  border-radius: 15px;
  overflow: hidden;

  .image {
    height: 55%;
    width: 100%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 100%;
      height: auto;
      margin: 0;
    }
  }

  .details {
    padding: 15px;

    h3 {
      font-size: 25px;
      margin-bottom: 10px;
      font-family: Arial, Helvetica, sans-serif;
    }
    p {
      font-family: Arial, Helvetica, sans-serif;
    }
  }
`;
