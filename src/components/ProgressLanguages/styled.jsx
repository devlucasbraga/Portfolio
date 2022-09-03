import styled from "styled-components";

export const ContainerLanguages = styled.div`
  margin-bottom: 12px;
  .b1 {
    width: 100%;
    height: 12px;
    background: ${({ theme }) => theme.cors.corText};
    border-radius: 20px;
    margin-top: 4px;
  }

  .b2 {
    background: linear-gradient(
      to left,
      ${({ theme }) => theme.cors.corDetails},
      ${({ theme }) => theme.cors.corDetails2}
    );
    border-radius: 20px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: end;
    height: 12px;
    width: 0;
    opacity: 0;
    transition: 1s ease 0.4s;
  }

  span {
    font-size: 0.875rem;
    color: ${({ theme }) => theme.cors.corPrimary};
    text-transform: uppercase;
  }
  .progress {
    font-size: 0.75rem;
    color: ${({ theme }) => theme.cors.corPrimary};
    margin-right: 4px;
  }
`;
