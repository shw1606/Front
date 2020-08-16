import styled from "styled-components";

export const ContainerWrapper = styled.div`
  position: relative;
  margin-top: 2rem;
  left: -6.5rem;
  @media (max-width: 1024px) {
    display: none;
  }
`;

export const Container = styled.div`
  position: absolute;
  width: 4rem;
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  background: rgb(248, 249, 250);
  border-width: 1px;
  border-style: solid;
  border-color: rgb(241, 243, 245);
  border-image: initial;
  border-radius: 2rem;
  padding: 0.5rem;
  &.fixed {
    position: fixed;
    top: 112px;
  }
  .likes {
    margin-top: 0.5rem;
    color: rgb(73, 80, 87);
    line-height: 1;
    font-size: 0.75rem;
    margin-bottom: 1rem;
    font-weight: bold;
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
  border-color: ${(props) => (props.active ? "white" : "rgb(134, 142, 150)")};
  background: ${(props) => (props.active ? "rgb(32, 201, 151)" : "white")};
  border-image: initial;
  border-radius: 1.5rem;
  svg {
    width: 24px;
    height: 24px;
    color: ${(props) => (props.active ? "white" : "rgb(134, 142, 150)")};
  }
`;
