import styled from "styled-components";

export const ContainerAbout = styled.section`
  .title {
    width: 90%;
    height: 100vh;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 0 60px;

    h1 {
      font-family: ${({ theme }) => theme.typeFont.fontSecundary};
      font-size: 2rem;
      font-weight: 600;
      text-align: left;
      text-transform: uppercase;
      color: ${({ theme }) => theme.cors.corPrimary};
    }
    p {
      max-width: 800px;
      font-size: 1.125rem;
      font-weight: 400;
      line-height: 24px;
      color: ${({ theme }) => theme.cors.corText};
      margin-top: 30px;
    }
  }
`;

export const BoxTitle = styled.div`
  margin-top: 40px;
  .skills {
    font-family: ${({ theme }) => theme.typeFont.fontSecundary};
    font-size: 2rem;
    font-weight: 600;
    text-transform: uppercase;
    color: ${({ theme }) => theme.cors.corPrimary};
  }
  .languages {
    width: 500px;
    height: 37vh;
    margin-top: 20px;
    border-radius: 20px;
    position: relative;
    /* box-shadow: 0 0 8px 1px rgba(13, 166, 255, 0.5); */
  }
`;
