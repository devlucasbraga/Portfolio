import styled from "styled-components";

export const ContainerHeader = styled.div`
  width: 100%;
  height: 80px;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  z-index: 99;
  .logo {
    width: 50%;
    img {
      width: 140px;
    }
  }

  nav {
    ul {
      display: flex;
      li {
        padding: 0 20px;
        a {
          font-size: 0.875rem;
          text-transform: uppercase;
          color: ${({ theme }) => theme.cors.corPrimary};
          transition: 0.5s;
          &:hover {
            color: ${({ theme }) => theme.cors.corDetails2};
          }
        }
      }
    }
  }
`;
