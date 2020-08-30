import styled from "styled-components";

export const Form = styled.form`
  margin-top: 3rem;
  margin-bottom: 3rem;
`;

export const FormButtons = styled.div`
  margin-top: 6rem;
  button {
    height: 3rem;
    font-size: 1.5rem;
    padding-left: 2rem;
    padding-right: 2rem;
    font-weight: bold;
    word-break: keep-all;
    cursor: pointer;
    border-radius: 1.5rem;
    border-width: initial;
    border-style: none;
    border-color: initial;
    border-image: initial;
    outline: none;
    transition: all 0.125s ease-in 0s;
  }
  .cancel {
    color: rgb(73, 80, 87);
    background: rgb(233, 236, 239);
    a {
      color: black;
    }
  }
  .submit {
    margin-left: 1rem;
    color: white;
    background: rgb(18, 184, 134);
  }
`;
