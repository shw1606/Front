import styled from 'styled-components';

export const UserProfileReferencesWrapper = styled.div`
  margin-top: 1.5rem;
  display: flex;
  svg {
    width: 32px;
    height: 32px;
    margin-right: 1em;
    color: rgb(173, 181, 189);
    &:hover {
    color: rgb(52, 58, 64);
    }
    @media (max-width: 768px) {
      width: 25px;
      height: 25px;
    }
  }
`;
