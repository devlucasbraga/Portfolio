import styled from "styled-components";

export const ContentSlide = styled.section`
  min-width: 30%;
  width: 50%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  margin: 0 auto;
  border-radius: 10px;
  background: rgba(13, 166, 246, 0.1);
  box-shadow: 0 1px 4px 1px rgba(13, 166, 246, 0.5),
    inset 0 1px 4px 1px rgba(13, 166, 246, 0.5);

  .active {
    display: inline-block;
  }

  .slides {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 4px;
    height: 69vh;
    width: 99%;
  }

  .inactive {
    display: none;
  }

  .slide-image {
    width: 100%;
    height: 97%;
    border-radius: 10px;
    object-fit: cover;
  }

  .slide-title {
    color: ${({ theme }) => theme.cors.corPrimary};
    font-size: 50px;
    display: block;
    text-align: center;
    margin-top: 16px;
    z-index: 10;
  }
  .slide-description {
    margin-top: 20px;
    color: ${({ theme }) => theme.cors.corText};
    font-size: 1.125rem;
    font-weight: 400;
    text-align: center;
  }
`;
