import styled from "styled-components";

export const ContentArrows = styled.div`
  .prev,
  .next {
    position: absolute;
    top: 30%;
    width: auto;
    font-size: 6rem;
    color: ${({ theme }) => theme.cors.corPrimary};
    cursor: pointer;
    z-index: 100;
    &:hover {
      color: ${({ theme }) => theme.cors.corDetails2};
      transition: all 0.3s ease-in;
    }
  }
  .next {
    right: 100px;
  }
  .prev {
    left: 100px;
  }
`;
