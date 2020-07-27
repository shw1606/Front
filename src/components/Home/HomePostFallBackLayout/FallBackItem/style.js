import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 19rem;
  margin: 1rem;
  border-radius: 4px;
  background: white;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 4px 16px 0px;
  transition: box-shadow 0.25s ease-in 0s, transform 0.25s ease-in 0s;
  @media (max-width: 944px) {
    width: calc(50% - 2rem);
  }
  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const Image = styled.div`
  width: 100%;
  height: 160px;
  background: #f2f2f2;
`;

export const Description = styled.div`
  width: 100%;
  height: 132px;
  padding: 1rem;
  .title {
    width: 200px;
    height: 20px;
    background: #f2f2f2;
  }
  .payload {
    width: 200px;
    height: 50px;
    margin-top: 0.5rem;
    background: #f2f2f2;
  }
  .date {
    background: #f2f2f2;
  }
`;

export const Author = styled.div`
  display: flex;
  width: 100%;
  height: 45px;
  padding: 0.625rem 1rem;
  border-top: 1px solid rgb(248, 249, 250);
  .profile {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    margin-right: 0.5rem;
    background: #f2f2f2;
  }
  .name {
    width: 80px;
    height: 24px;
    background: #f2f2f2;
  }
`;
