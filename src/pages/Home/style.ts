import styled from "styled-components";

export const Container = styled.div`
  height: auto;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  header {
    background-color: #250f00;
    height: 10vh;
    width: 100%;
  }
  main {
    width: 100%;
  }
  @media (max-width: 1024px) {
    .home__image {
      height: auto;
      width: 100%;
      img {
        background-color: #ffffff;
        height: auto;
        max-height: 90vh;
        width: 100%;
      }
    }
    .services {
      width: 100%;
      height: auto;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      background-image: url("../../assets/images/wellpaperMassoterapia 3.jpg");
      background-size: cover;
      background-repeat: no-repeat;
    }
    .services__header {
      height: 10vh;
      color: #ffffff;
      width: 100%;
      background-color: #42918d;
    }
    .services__cards {
      width: 100%;
      max-width: 1420px;
      height: auto;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      overflow-x: auto;
      display: none;
    }
    .services__details {
      height: 700px;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      max-width: 1420px;
      .detail__sector {
        display: flex;
        height: 50%;
        flex-direction: column;
        align-items: center;
        width: 100%;
        padding: 20px;

        .detail__text {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 10px;
          height: 50%;
          justify-content: center;

          p {
            width: 80%;
            font-size: 15px;
            margin: 0;
            text-align: justify;
          }
        }
        .detail__image {
          height: 50%;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          img {
            height: auto;
            width: 100%;
          }
        }
      }
    }

    .services__pictures {
      width: 100%;
      align-items: center;
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      background-color: lightslategrey;
      padding: 10px;

      img {
        width: 45%;
        height: auto;
      }
    }
    footer {
      width: 100%;
      height: auto;
      .footer__top {
        width: 100%;
        height: 50px;
        background-color: #42918d;
      }
      .footer__details {
        width: 100%;
        height: 150px;
        background-color: #250f00;
      }
    }
  }

  @media (min-width: 1024px) {
    header {
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
      ul {
        display: flex;
        flex-direction: row;
        li {
          text-decoration: none;
          list-style: none;
          color: #ffffff;
          margin: 20px;
          font-weight: bold;
        }
        li:hover {
          text-decoration: underline;
          cursor: pointer;
        }
      }
    }

    .home__image {
      height: 90vh;
      width: 100%;
      display: flex;
      align-items: center;

      img {
        height: 100%;
        margin: 0 auto;
      }
    }

    .services {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .services__header {
      height: 10vh;
      color: #ffffff;
      width: 100%;
      background-color: #42918d;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .services__cards {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      align-items: center;
      width: 80%;
      padding: 20px;
    }

    .services__details {
      padding: 20px;
      width: 80%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .services__cards {
      display: flex;
      flex-direction: row;
    }
    #imageSecond {
      display: flex;
      flex-direction: row-reverse;
    }
    .detail__sector {
      display: flex;
      flex-direction: row;

      .detail__image {
        width: 50%;
        display: flex;
        align-items: center;
        padding: 20px;
        img {
          margin: 0 auto;
        }
      }
    }
    .detail__text {
      width: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      p {
        font-size: 30px;
        width: 80%;
      }
    }
    .services__pictures {
      width: 80%;
      height: 600px;
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      padding: 20px;
      img {
        width: 45%;
      }
    }
    footer {
      width: 100%;
      height: auto;
      .footer__top {
        width: 100%;
        height: 50px;
        background-color: #42918d;
      }
      .footer__details {
        width: 100%;
        height: 150px;
        background-color: #250f00;
      }
    }
  }
`;
