import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin-bottom: 2rem;
  margin-right: 2rem;
  border-radius: 4px;
  background: white;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 4px 16px 0px;
  transition: box-shadow 0.25s ease-in 0s, transform 0.25s ease-in 0s;
  @media (max-width: 1440px) {
    margin-right: 0;
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
    width: 70%;
    height: 20px;
    background: #f2f2f2;
  }
  .payload {
    width: 90%;
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
