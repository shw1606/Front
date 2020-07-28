import styled from "styled-components";

export const ContainerWrapper = styled.div`
  position: relative;
  margin-top: 2rem;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  left: -7rem;
  padding: 0.5rem;
  width: 4rem;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(241, 243, 245);
  border-image: initial;
  border-radius: 2rem;
  background: rgb(248, 249, 250);
  -webkit-box-align: center;
`;
