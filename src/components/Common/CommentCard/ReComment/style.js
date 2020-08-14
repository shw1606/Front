import styled from "styled-components";

export const OpenButtonContainer = styled.div`
  margin-top: 2rem;
  .button {
    display: inline-flex;
    align-items: center;
    -webkit-box-align: center;
    color: rgb(18, 184, 134);
    font-weight: bold;
    cursor: pointer;
    svg {
      margin-right: 0.5rem;
    }
  }
`;

export const ReCommentWrapper = styled.div`
  display: none;
  background-color: rgba(0, 0, 0, 0.016);
  padding: 1.5rem;
  margin-top: 1.3125rem;
  border-radius: 4px;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.02);
  border-image: initial;
  &.opened {
    display: block;
  }
`;

export const ReplyButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 2rem;
  height: 2.5rem;
  font-size: 1rem;
  color: rgb(18, 184, 134);
  -webkit-box-align: center;
  -webkit-box-pack: center;
  font-weight: 600;
  border-radius: 4px;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(18, 184, 134);
  border-image: initial;
  outline: none;
  background: white;
  cursor: pointer;
`;
