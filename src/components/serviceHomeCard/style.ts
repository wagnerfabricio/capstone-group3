import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
  height: 350px;
  background-color: #cb4254;
  margin: 0;
  color: #ffffff;
  border-radius: 15px;

  .image {
    height: 60%;
    width: 100%;

    img {
      width: 100%;
      margin: 0;
      border-radius: 15px 15px 0 0;
    }
  }

  .details {
    padding: 15px;
    h3 {
      font-size: 30px;
      margin-bottom: 10px;
    }
    p {
    }
  }
`;
