import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-weight: bold;
  font-size: 1.125rem;
  color: rgb(33, 37, 41);
  transition: all 0.125s ease-in 0s;
`;

export const Input = styled.input`
  width: 250px;
  height: 40px;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  line-height: 1.5;
  color: rgb(73, 80, 87);
  border-width: initial;
  border-color: initial;
  border-image: initial;
  border-style: none;
  outline: none;
  border-bottom: 1px solid rgb(73, 80, 87);
  transition: all 0.125s ease-in 0s;
`;
