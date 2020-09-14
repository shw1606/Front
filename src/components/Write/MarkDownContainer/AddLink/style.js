import styled from "styled-components";

export const Layout = styled.div`
  position: absolute;
  top: ${(props) => `${props.top}px`};
  left: ${(props) => props.left};
  right: ${(props) => props.right};

  margin-top: 1rem;
  width: 20rem;
  background: white;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 0px 4px;
  border-radius: 4px;
  padding: 1.5rem 1rem;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  font-weight: bold;
  color: rgb(52, 58, 64);
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
`;

export const Input = styled.input`
  flex: 1 1 0%;
  border-top: none;
  border-right: none;
  border-left: none;
  border-image: initial;
  outline: none;
  border-bottom: 1px inset rgb(173, 181, 189);
  font-size: 1rem;
  margin-right: 0.5rem;
  line-height: 1.5;
  padding: 0px;
`;

export const Button = styled.button`
  height: 1.5rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  font-size: 0.875rem;
  border-radius: 0.75rem;
  border: none;
  outline: none;
  font-weight: bold;
  word-break: keep-all;
  background: rgb(52, 58, 64);
  color: white;
  transition: all 0.125s ease-in 0s;
  cursor: pointer;
`;
