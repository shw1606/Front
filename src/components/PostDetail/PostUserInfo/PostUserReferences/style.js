import styled from "styled-components";

export const UserReferencesContainer = styled.div`
  color: rgb(173, 181, 189);
  display: flex;
  a {
    color: inherit;
    display: block;
  }
  svg {
    cursor: pointer;
    width: 2rem;
    height: 2rem;
    :hover {
      color: rgb(52, 58, 64);
    }
  }
  a + a {
    margin-left: 1rem;
  }
`;

export const MailAddressDiv = styled.div`
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  div {
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 4px 0px;
    font-size: 0.875rem;
    color: white;
    background: rgb(73, 80, 87);
    padding: 0.5rem;
    border-radius: 4px;
  }
`;
