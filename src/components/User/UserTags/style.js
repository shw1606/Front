import styled from "styled-components";

export const UserTagsWrapper = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  overflow-y: auto;
  margin-top: 2.5rem;
  padding-bottom: 1rem;
`;

export const Tag = styled.li`
  height: 2rem;
  list-style: none;
  border-radius: 15px;
  margin-right: 1rem;
  padding: 0.3em 1rem;
  flex-shrink: 0;
  cursor: pointer;
  background-color: ${props => props.active === true ? '#12b886' : '#f1f3f5'};
  a {
    color: ${props => props.active === true ? '#fff' : '#343a40'};
  }
`;
