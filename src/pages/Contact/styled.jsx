import styled from "styled-components";

export const ContainerContact = styled.section`
  width: 90%;
  height: 100vh;
  margin: 0 auto;

  .content-contact {
    width: 80%;
    height: 60vh;
    margin: 0 auto;
    padding: 200px 0;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    .contact-left {
      width: 50%;
      display: flex;
      flex-direction: column;
      color: ${({ theme }) => theme.cors.corPrimary};

      h1 {
        font-size: 2rem;
        text-transform: uppercase;
      }

      .linha {
        width: 350px;
        height: 3px;
        background: ${({ theme }) => theme.cors.corPrimary};
        margin-top: 10px;
        margin-bottom: 10px;
      }

      svg {
        font-size: 2rem;
        margin-top: 15px;
      }

      span {
        font-size: 1.125rem;
        padding: 15px 0;
      }
    }
  }
`;

export const ContactRight = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.cors.corPrimary};

  h1 {
    font-size: 2rem;
    text-transform: uppercase;
  }
  input {
    border-radius: 20px;
    border: none;
    padding: 15px 20px;
    margin-bottom: 20px;
    font-size: 1.125rem;
    font-weight: 600;
    outline: none;
  }

  textarea {
    width: 100%;
    height: 120px;
    border-radius: 20px;
    border: none;
    margin-bottom: 20px;
    font-size: 1.2rem;
    padding: 15px 20px;
    font-weight: 600;
  }
`;
