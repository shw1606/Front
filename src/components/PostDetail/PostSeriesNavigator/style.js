import styled from "styled-components";

export const Container = styled.div`
  margin-top: 3rem;
  display: flex;
  margin-left: auto;
  margin-right: auto;
`;

export const Navigator = styled.div`
  min-width: 0px;
  flex: 1 1 0%;
  margin-left: ${(props) => props.marginLeft};
  a {
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.06) 0px 0px 4px 0px;
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
    height: 4rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    flex-direction: ${(props) => props.flexDirection};
    background: rgb(248, 249, 250);
    text-decoration: none;
  }
`;

export const ButtonWrapper = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  font-size: 1.5rem;
  color: rgb(32, 201, 151);
  margin-right: ${(props) => props.marginRight};
  margin-left: ${(props) => props.marginLeft};
  border-radius: 16px;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(32, 201, 151);
  border-image: initial;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => props.alignItems};
  line-height: 1;
  min-width: 0px;
  flex: 1 1 0%;
  .description {
    font-size: 0.75rem;
    font-weight: bold;
    color: rgb(73, 80, 87);
  }
  h3 {
    text-align: ${(props) => props.textAlign};
    width: 100%;
    font-size: 1.125rem;
    color: rgb(73, 80, 87);
    line-height: 1.15;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow-x: hidden;
    overflow-y: hidden;
    margin: 0.5rem 0px 0px;
  }
`;
