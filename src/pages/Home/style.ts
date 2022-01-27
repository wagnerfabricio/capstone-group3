import styled from "styled-components";

export const Container = styled.div`
  height: auto;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .home__image {
    background-color: red;
    height: 90vh;
    width: 100%;
    img {
      background-color: lightgreen;
      height: 90vh;
      width: 100%;
    }
  }
`;
