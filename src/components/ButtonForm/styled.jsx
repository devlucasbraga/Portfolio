import styled from "styled-components";

export const Button = styled.button`
  margin-top: 20px;
  margin-bottom: 10px;
  padding: 10px 26px;
  border-radius: 16px;
  color: ${({ theme }) => theme.cors.corPrimary};
  background: ${({ theme }) => theme.cors.corDetails3};
  font-family: ${({ theme }) => theme.typeFont.fontSecundary};
  font-weight: 600;
  font-size: 0.875rem;
  text-transform: uppercase;
  cursor: pointer;
  &:hover {
    background: linear-gradient(
      to left,
      ${({ theme }) => theme.cors.corDetails3} 10%,
      ${({ theme }) => theme.cors.corDetails2} 100%
    );
  }
`;
