import styled from 'styled-components';

export const UserInfoWrapper = styled.div`
  padding-bottom: 2em;
  border-bottom: 1px solid #e9ecef;
  display: flex;
  @media (max-width: 768px) {
      display: block;
  }
  img {
    height: 120px;
    width: 120px;
    border-radius: 50%;
    margin-right: 1.5em;
    @media (max-width: 768px) {
      height: 70px;
      width: 70px;
      margin-bottom: 1em;
    }
  }
`;

export const TextWrapper = styled.div`
  margin: auto 0;
  h1 {
    margin-bottom: 0.3em;
    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }
`;
