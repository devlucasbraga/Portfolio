import styled from "styled-components";
import bg from "../../assets/4.jpg";

export const ContainerHome = styled.main`
  /* width: 100%;
  height: 100vh;
  background: url(${bg}) center center;
  background-size: cover; */
`;

export const Title = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  padding: 0 60px;

  h1 {
    color: ${({ theme }) => theme.cors.corPrimary};
    text-transform: uppercase;
    font-size: 8rem;
    letter-spacing: 5px;
    font-family: ${({ theme }) => theme.typeFont.fontSecundary};
    position: relative;
    &::before {
      content: "";
      position: absolute;
      width: 10px;
      height: 2px;
      display: inline-block;
      top: 40%;
      background: linear-gradient(to left, #21d4fd, #b721ff);
      opacity: 0;
      transition: 1s ease;
    }
    &::after {
      content: "";
      position: absolute;
      width: 2px;
      height: 10px;
      display: inline-block;
      left: 13%;
      background: linear-gradient(to left, #21d4fd, #b721ff);
      opacity: 0;
      transition: 2s ease;
    }
    &:hover::after {
      opacity: 1;
      height: 400px;
      transform: translateY(-100px);
    }
    &:hover::before {
      opacity: 1;
      width: 80%;
      transform: scaleX(1.2);
    }
  }

  h2 {
    color: ${({ theme }) => theme.cors.corPrimary};
    text-transform: uppercase;
    font-size: 3rem;
    letter-spacing: 20px;
    font-family: ${({ theme }) => theme.typeFont.fontSecundary};
    margin-left: 30px;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      width: 10px;
      height: 2px;
      display: inline-block;
      top: -5px;
      background: linear-gradient(to left, #21d4fd, #b721ff);
      opacity: 0;
      transition: 2s ease;
    }
    &::after {
      content: "";
      position: absolute;
      width: 2px;
      height: 10px;
      display: inline-block;
      left: 46%;
      background: linear-gradient(to left, #21d4fd, #b721ff);
      opacity: 0;
      transition: 1s ease;
    }
    &:hover::after {
      opacity: 1;
      height: 400px;
      transform: translateY(-300px);
    }
    &:hover::before {
      opacity: 1;
      width: 90%;
      transform: scaleX(1.2);
    }
  }

  h3 {
    color: ${({ theme }) => theme.cors.corPrimary};
    text-transform: uppercase;
    font-size: 1.2rem;
    letter-spacing: 20px;
    font-family: ${({ theme }) => theme.typeFont.fontSecundary};
    margin-top: 30px;
    margin-left: 35px;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      width: 10px;
      height: 2px;
      display: inline-block;
      top: -5px;
      background: linear-gradient(to left, #21d4fd, #b721ff);
      opacity: 0;
      transition: 1s ease;
    }
    &::after {
      content: "";
      position: absolute;
      width: 2px;
      height: 10px;
      display: inline-block;
      left: 20px;
      background: linear-gradient(to left, #21d4fd, #b721ff);
      opacity: 0;
      transition: 2s ease;
    }
    &:hover::after {
      opacity: 1;
      height: 400px;
      transform: translateY(-300px);
    }
    &:hover::before {
      opacity: 1;
      width: 95%;
      transform: scaleX(1.2);
    }
  }
`;
