import styled from "styled-components";

export const ContainerContact = styled.div`
  width: 90%;
  height: 90vh;
  margin: 0 auto;
  .content-contact {
    width: 80%;
    height: 60vh;
    margin: 0 auto;
    padding: 200px 0;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;

    .contact-left {
      width: 50%;
      display: flex;
      flex-direction: column;
      color: ${({ theme }) => theme.cors.corPrimary};

      h1 {
        font-size: 2rem;
        text-transform: uppercase;
      }

      svg {
        font-size: 2rem;
        margin-top: 15px;
        color: ${({ theme }) => theme.cors.corDetails3};
      }

      span {
        font-size: 1.125rem;
        padding: 15px 0;
      }
    }
  }
`;

export const FormContact = styled.form`
  width: 50%;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.cors.corPrimary};
  h1 {
    font-size: 2rem;
    text-transform: uppercase;
  }

  input {
    width: 100%;
    padding: 15px 20px;
    margin-bottom: 20px;
    font-size: 1.125rem;
    font-weight: 600;
    position: relative;
    border-radius: 15px;
    border: 3px solid transparent;
    outline: none;
    background: ${({ theme }) => theme.cors.corPrimary};
    &:nth-last-of-type(2) {
      margin-top: 20px;
    }
    &:focus {
      background: linear-gradient(
            ${({ theme }) => theme.cors.corPrimary},
            ${({ theme }) => theme.cors.corPrimary}
          )
          padding-box,
        linear-gradient(
            to left,
            ${({ theme }) => theme.cors.corDetails},
            ${({ theme }) => theme.cors.corDetails2}
          )
          border-box;
    }
  }

  textarea {
    width: 100%;
    height: 120px;
    border-radius: 15px;
    border: 3px solid transparent;
    margin-bottom: 20px;
    font-size: 1.2rem;
    padding: 15px 20px;
    font-weight: 600;
    outline: none;
    background: ${({ theme }) => theme.cors.corPrimary};
    &:focus {
      background: linear-gradient(
            ${({ theme }) => theme.cors.corPrimary},
            ${({ theme }) => theme.cors.corPrimary}
          )
          padding-box,
        linear-gradient(
            to left,
            ${({ theme }) => theme.cors.corDetails},
            ${({ theme }) => theme.cors.corDetails2}
          )
          border-box;
    }
  }
`;
