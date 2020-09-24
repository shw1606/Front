import React, { useState, useCallback } from "react";
import * as S from "./style";
import SquareButton from "../../Common/SquareButton";
import UnderlineButton from "../../Common/UnderlineButton";

const MainSetting = () => {
  const [profileSaved, setProfileSaved] = useState(true);
  const onModButtonClick = useCallback((e) => {
    setProfileSaved(false);
  }, []);
  const [name, setName] = useState("exampleUser");
  const [shortBio, setShortBio] = useState("exampleMessage");
  const onNameChange = useCallback((e) => {
    setName(e.target.value);
  }, []);
  const onBioChange = useCallback((e) => {
    setShortBio(e.target.value);
  });
  const onProfileSubmit = useCallback((e) => {
    // 서버 데이터 갱신
    setProfileSaved(true);
  });
  return (
    <S.MainSettingSection>
      <div className="thumbnail-area">
        <img />
        <SquareButton color="teal">이미지 업로드</SquareButton>
        <SquareButton color="transparent">이미지 제거</SquareButton>
      </div>
      {profileSaved ? (
        <div className="info-area">
          <h2>{name}</h2>
          <p>{shortBio}</p>
          <UnderlineButton onClick={onModButtonClick}>수정</UnderlineButton>
        </div>
      ) : (
        <div className="info-area">
          <S.ProfileForm onSubmit={onProfileSubmit}>
            <input
              type="text"
              className="display-name"
              name="displayName"
              placeholder="이름"
              value={name}
              onChange={onNameChange}
            />
            <input
              type="text"
              className="shortBio"
              name="shortBio"
              placeholder="한 줄 소개"
              value={shortBio}
              onChange={onBioChange}
            />
            <div className="button-wrapper">
              <SquareButton type="submit">저장</SquareButton>
            </div>
          </S.ProfileForm>
        </div>
      )}
    </S.MainSettingSection>
  );
};

export default MainSetting;
