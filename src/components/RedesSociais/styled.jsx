import styled from "styled-components";

export const NavIcons = styled.nav`
  width: 10%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 60px;
  position: fixed;
  z-index: 999;
  ul {
    li {
      padding: 30px 0;
      font-size: 2rem;
      a {
        svg {
          width: 1.25rem;
          fill: ${({ theme }) => theme.cors.corPrimary};
          transition: 0.5s ease;
          &:hover {
            width: 1.5rem;
            fill: ${({ theme }) => theme.cors.corDetails2};
          }
        }
      }
    }
  }
`;
