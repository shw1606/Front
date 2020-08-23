import styled from 'styled-components';

export const UserInfoWrapper = styled.div`
    padding-bottom: 2.5em;
    border-bottom: 1px solid #e9ecef;
    display: flex;
    @media (max-width: 768px) {
        display: block;
    }
    img {
      height: 100px;
      width: 100px;
      border-radius: 50%;
      margin-right: 1em;
      @media (max-width: 768px) {
        height: 60px;
        width: 60px;
      }
    }
`;

export const TextWrapper = styled.div`
    margin: auto 0;
    h1 {
      margin-bottom: 0.3em;
    }
`;

