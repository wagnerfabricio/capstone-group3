import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: #f2d797;
  display: grid;
  place-items: center;
`;

export const Content = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: darkslategray;

  img {
    width: 40vh;
    margin-bottom: 20px;
  }

  h2 {
    text-align: center;
    line-height: 30px;
    width: 60%;
    margin-bottom: 30px;
  }
`;
