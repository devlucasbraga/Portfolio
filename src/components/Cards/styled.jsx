import styled from "styled-components";

export const Card = styled.div`
  width: 100%;
  height: 70%;
  margin: 150px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  transition: 0.4s;
  padding: 2px;
  background: rgba(13, 166, 246, 0.1);
  box-shadow: 0 1px 4px 1px rgba(13, 166, 246, 0.5),
    inset 0 1px 4px 1px rgba(13, 166, 246, 0.5);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px 10px 0 0;
    pointer-events: none;
  }

  .info-card {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    padding: 10px 20px;
    h1 {
      color: ${({ theme }) => theme.cors.corPrimary};
      font-size: 2.25rem;
      font-family: ${({ theme }) => theme.typeFont.fontSecundary};
    }
    p {
      font-size: 1rem;
      font-weight: 400;
      line-height: 24px;
      color: ${({ theme }) => theme.cors.corText};
      width: 100%;
      margin-top: 15px;
      text-align: justify;
    }
  }
`;
