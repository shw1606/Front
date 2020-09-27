import styled from 'styled-components';

export const AlignButton = styled.button`
  background-color: #f1f3f5;
  float: right;
  border: none;
  &:focus {
    outline: none
  }
  margin: 1rem 0;
  padding: 0 0.5em 0.5em 0.5em;
  border-radius: 5px;
  &:hover {
    background-color: #f8f9fa;
  }
  svg {
    color: #20c997;
    position: relative;
    top: 0.5em;
    width: 20px;
    height: 20px;
  }
  span {
    font-size: 12px;
    color: #343a40;
  }
`;
