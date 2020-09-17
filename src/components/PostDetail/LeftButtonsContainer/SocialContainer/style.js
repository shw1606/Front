import styled from "styled-components";

export const SocialButtonContainer = styled.div`
  position: relative;
  width: 100%;
  z-index: 5;
  div {
    position: absolute;
  }
`;

export const SocialAnimation = styled.div`
  opacity: 0;
  transform: translate(0, 0);
  top: 0px;
  left: 0px;
  position: absolute;
  width: 48px;
  height: 48px;
  transition: 0.5s;
  &.open {
    opacity: 1;
    transform: ${(props) =>
    `translate(${props.animation[0]}px, ${props.animation[1]}px)`};
  }
`;

export const ButtonWrapper = styled.div`
  height: 3rem;
  width: 3rem;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  color: rgb(134, 142, 150);
  cursor: pointer;
  z-index: 5;
  background: white;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(173, 181, 189);
  border-image: initial;
  border-radius: 1.5rem;
  svg {
    width: 24px;
    height: 24px;
  }
`;
