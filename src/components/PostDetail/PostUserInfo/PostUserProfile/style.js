import styled from "styled-components";

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  img {
    display: block;
    width: 8rem;
    height: 8rem;
    object-fit: cover;
    box-shadow: rgba(0, 0, 0, 0.06) 0px 0px 4px 0px;
    border-radius: 50%;
  }
`;

export const ProfileTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 1rem;
  .name {
    font-size: 1.5rem;
    line-height: 1.5;
    font-weight: bold;
    color: rgb(33, 37, 41);
    a {
      color: inherit;
      text-decoration: none;
      :hover {
        text-decoration: underline;
      }
    }
  }
  .description {
    white-space: pre-wrap;
    font-size: 1.125rem;
    line-height: 1.5;
    margin-top: 0.25rem;
    color: rgb(73, 80, 87);
    letter-spacing: -0.004em;
  }
`;
