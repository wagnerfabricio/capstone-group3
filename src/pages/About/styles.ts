import styled from "styled-components";
import wallpaper from "../../assets/images/wallpaper.jpg";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: grid;
  place-items: center;
  background-image: url(${wallpaper});
  background-size: cover;
  background-position: center;
  opacity: 0.5;
`;

export const Content = styled.div`
  max-width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 80px;
  margin-bottom: 30px;

  @media (min-width: 800px) {
    width: 80%;
    flex-direction: row;
    flex-wrap: wrap;

    /* a:nth-child(odd) {
      align-self: flex-start;
    }

    a:nth-child(even) {
      align-self: flex-end;
    } */
  }

  a {
    border: none;
    text-align: left;

    :any-link {
      color: black;
      text-decoration: none;
    }

    :hover {
      h2 {
        text-decoration: underline;
      }
    }
  }
`;

export const CardImageContainer = styled.div`
  width: 300px;
  height: 300px;

  img {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
`;
