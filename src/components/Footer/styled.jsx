import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  height: 80px;
  color: ${({ theme }) => theme.cors.corPrimary};
  line-height: 80px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.5);
  position: relative;
`;
