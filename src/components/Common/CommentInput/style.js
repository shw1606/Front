import styled from "styled-components";

export const Textarea = styled.textarea`
  resize: none;
  margin-bottom: 1.5rem;
  width: 100%;
  min-height: 6.125rem;
  font-size: 1rem;
  color: rgb(33, 37, 41);
  line-height: 1.75;
  padding: 1rem 1rem 1.5rem;
  outline: none;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(233, 236, 239);
  border-image: initial;
  border-radius: 4px;
  overflow-y: hidden;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  -webkit-box-pack: end;
  justify-content: flex-end;
  button {
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    font-weight: bold;
    cursor: pointer;
    color: white;
    padding-top: 0px;
    padding-bottom: 0px;
    height: 2rem;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    font-size: 1rem;
    outline: none;
    border-width: initial;
    border-style: none;
    border-color: initial;
    border-image: initial;
    background: rgb(18, 184, 134);
    border-radius: 4px;
  }
  .cancel {
    margin-right: 0.75rem;
    background: rgb(134, 142, 150);
  }
`;
