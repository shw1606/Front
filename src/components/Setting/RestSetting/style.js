import styled from "styled-components";

export const RestSettingSection = styled.section`
  margin-top: 4rem;
`;

export const SettingItem = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;
  .wrapper {
    display: flex;
  }
  .description {
    margin-top: 0.875rem;
    color: rgb(134, 142, 150);
    font-size: 0.875rem;
  }
  .title-wrapper {
    width: 9.5rem;
    flex-shrink: 0;
    h3 {
      line-height: 1.5;
      color: rgb(52, 58, 64);
      font-size: 1.125rem;
      margin: 0px;
    }
  }
  .block-for-mobile {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    flex: 1 1 0%;
  }
  .contents {
    font-size: 1rem;
    color: rgb(73, 80, 87);
    line-height: 1.5;
    flex: 1 1 0%;
  }
  .edit-wrapper {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    margin-left: 1rem;
  }
  .description {
    margin-top: 0.875rem;
    color: rgb(134, 142, 150);
    font-size: 0.875rem;
  }

  & + & {
    border-top: 1px solid rgb(233, 236, 239);
  }
`;

export const SocialInfoForm = styled.form`
  width: 25rem;
  .button-wrapper {
    margin-top: 1.5rem;
    display: flex;
    -webkit-box-pack: end;
    justify-content: flex-end;
  }
`;

export const InfoList = styled.ul`
  list-style: none;
  padding: 0px;
  margin: 0px;
  li {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    svg {
      width: 1rem;
      height: 1rem;
      font-size: 1rem;
      margin-right: 0.5rem;
      flex-shrink: 0;
    }
    span {
      font-size: 1rem;
    }
  }
  li + li {
    margin-top: 1rem;
  }
`;

export const InfoInput = styled.input`
  display: block;
  color: rgb(73, 80, 87);
  font-size: 1rem;
  line-height: 1rem;
  width: 100%;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(222, 226, 230);
  border-image: initial;
  background: white;
  padding: 0.5rem;
  outline: none;
  border-radius: 4px;
`;

export const FacebookInputDiv = styled.div`
  display: flex;
  color: rgb(73, 80, 87);
  font-size: 1rem;
  line-height: 1rem;
  height: 2.25rem;
  -webkit-box-align: center;
  align-items: center;
  flex: 1 1 0%;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(222, 226, 230);
  border-image: initial;
  background: white;
  padding: 0.5rem;
  outline: none;
  border-radius: 4px;
  span {
    color: rgb(173, 181, 189);
    margin-right: 0.25rem;
  }
  input {
    font-size: 1rem;
    line-height: 1;
    width: 100%;
    padding: 0px;
    border-width: 0px;
    border-style: initial;
    border-color: initial;
    border-image: initial;
    outline: none;
    flex: 1 1 0%;
  }
`;

export const TitleForm = styled.form`
  display: flex;
  align-items: center;
  -webkit-box-align: center;
  input {
    flex: 1 1 0%;
    margin-right: 1rem;
  }
`;

export const TitleInput = styled.input`
  display: block;
  border: 1px solid rgb(222, 226, 230);
  background: white;
  padding: 0.5rem;
  color: rgb(73, 80, 87);
  font-size: 1rem;
  line-height: 1rem;
  outline: none;
  border-radius: 4px;
`;

export const SocialInfoUl = styled.ul`
  list-style: none;
  padding: 0px;
  margin: 0px;
  li {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    svg {
      width: 1rem;
      height: 1rem;
      font-size: 1rem;
      margin-right: 0.5rem;
      flex-shrink: 0;
    }
  }
`;

export const ToggleDiv = styled.div`
  cursor: pointer;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  width: 2.875rem;
  height: 1.5rem;
  transition: all 0.125s ease-in 0s;
  border-radius: 1.125rem;
  padding: 0.125rem;
  background: rgb(32, 201, 151);
  .circle {
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 0.625rem;
    background: white;
    box-shadow: rgba(0, 0, 0, 0.05) 2px 0px 4px;
  }
  ${(props) => props.color === "gray" && `background: rgb(233, 236, 239);`}
`;
