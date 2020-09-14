import styled from "styled-components";

export const MainSettingSection = styled.section`
  display: flex;
  height: 13.75rem;

  .thumbnail-area {
    padding-right: 1.5rem;
    display: flex;
    flex-direction: column;
    img {
      object-fit: cover;
      width: 8rem;
      height: 8rem;
      display: block;
      margin-bottom: 1.25rem;
      border-radius: 50%;
    }

    button + button {
      margin-top: 0.5rem;
    }
  }

  .info-area {
    padding-left: 1.5rem;
    flex: 1 1 0%;
    border-left: 1px solid rgb(233, 236, 239);
    h2 {
      font-size: 2.25rem;
      line-height: 1.5;
      color: rgb(52, 58, 64);
      margin: 0px;
    }
    p {
      font-size: 1rem;
      margin-top: 0.25rem;
      margin-bottom: 0.5rem;
      line-height: 1.5;
      color: rgb(134, 142, 150);
    }
  }
`;

export const ProfileForm = styled.form`
  input {
    display: block;
    border: 1px solid rgb(222, 226, 230);
    background: white;
    padding: 0.5rem;
    color: rgb(73, 80, 87);
    font-size: 1rem;
    line-height: 1rem;
    outline: none;
    border-radius: 4px;
    width: 100%;
  }
  .display-name {
    font-size: 1.5rem;
    font-weight: 600;
  }
  input + input {
    margin-top: 1rem;
  }
  .button-wrapper {
    display: flex;
    margin-top: 1.5rem;
    -webkit-box-pack: end;
    justify-content: flex-end;
  }
`;
