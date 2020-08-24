import styled from "styled-components";

export const UserTagsWrapper = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  overflow-y: auto;
  margin-top: 2.5rem;
`;

export const Tag = styled.li`
  height: 2rem;
  list-style: none;
  border-radius: 15px;
  margin-right: 1rem;
  padding: 0.3em 1rem;
  flex-shrink: 0;
  cursor: pointer;
  background-color: #f1f3f5;
  a {
    color: #343a40;
  }
`;

export const TagsAll = styled.li`
  height: 2rem;
  list-style: none;
  border-radius: 15px;
  margin-right: 1rem;
  padding: 0.3em 1rem;
  flex-shrink: 0;
  cursor: pointer;
  background-color: #12b886;
  a {
    color: #fff;
  }
`;
