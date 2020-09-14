import React, { useState, useCallback } from "react";
import * as S from "./style";
import SocialInfo from "./SocialInfoInput";
import SocialInfoList from "./SocialInfoList";
import SquareButton from "../../Common/SquareButton";
import UnderlineButton from "../../Common/UnderlineButton";

const RestSetting = () => {
  const [titleSaved, setTitleSaved] = useState(true);
  const [socialInfoSaved, setSocialInfoSaved] = useState(true);
  const sampleData = {
    velogTitle: "example.log",
    socialInfo: {
      email: undefined,
      github: undefined,
      twitter: undefined,
      facebook: undefined,
      homePage: undefined,
    },
    userEmail: "example@example.com",
    toggle: {
      commentNotification: true,
      updateNotification: false,
    },
  };
  const [exampleData, setExampleData] = useState(sampleData);
  const onVelogTitleChange = useCallback((e) => {
    let prev = exampleData;
    prev.velogTitle = e.target.value;
    setExampleData(prev);
    console.log("setEnapf");
  });
  const onTitleModClick = useCallback((e) => {
    setTitleSaved(false);
  });
  const onTitleSumbit = useCallback((e) => {
    e.preventDefault();
    setTitleSaved(true);
    // 서버에 데이터 갱신하는 것 추가 필요.
  });
  const onAddClick = useCallback((e) => {
    setSocialInfoSaved(false);
  }, []);
  const onSubmit = useCallback((e) => {
    e.preventDefault();
    setSocialInfoSaved(true);
    // 서버에 데이터 갱신하는 것 추가 필요.
  }, []);
  const onCommentToggleClick = useCallback((e) => {
    // 서버 데이터 갱신
  }, []);
  const onUpdateToggleClick = useCallback((e) => {
    // 서버 데이터 갱신
  }, []);

  return (
    <S.RestSettingSection>
      <S.SettingItem>
        <div className="wrapper">
          <div className="title-wrapper">
            <h3>벨로그 제목</h3>
          </div>
          <div className="block-for-mobile">
            {titleSaved ? (
              <>
                <div className="contents">{exampleData.velogTitle}</div>
                <div className="edit-wrapper">
                  <UnderlineButton onClick={onTitleModClick}>
                    수정
                  </UnderlineButton>
                </div>
              </>
            ) : (
              <div className="contents">
                <S.TitleForm onSubmit={onTitleSumbit}>
                  <S.TitleInput
                    placeholder="벨로그 제목"
                    value={exampleData.velogTitle}
                    onChange={onVelogTitleChange}
                  />
                  <SquareButton type="submit">저장</SquareButton>
                </S.TitleForm>
              </div>
            )}
          </div>
        </div>
        <div className="description">
          개인 페이지의 좌측 상단에 나타나는 페이지 제목입니다.
        </div>
      </S.SettingItem>
      <S.SettingItem>
        <div className="wrapper">
          <div className="title-wrapper">
            <h3>소셜 정보</h3>
          </div>
          <div className="block-for-mobile">
            <div className="contents">
              {socialInfoSaved ? (
                !sampleData.socialInfo.email &&
                !sampleData.socialInfo.github &&
                !sampleData.socialInfo.twitter &&
                !sampleData.socialInfo.facebook &&
                !sampleData.socialInfo.homePage ? (
                  <UnderlineButton onClick={onAddClick}>
                    정보 추가
                  </UnderlineButton>
                ) : (
                  <>
                    <SocialInfoList socialInfo={sampleData.socialInfo} />
                  </>
                )
              ) : (
                <SocialInfo
                  onSubmit={onSubmit}
                  socialInfo={sampleData.socialInfo}
                />
              )}
            </div>
            {((socialInfoSaved && sampleData.socialInfo.email) ||
              sampleData.socialInfo.github ||
              sampleData.socialInfo.twitter ||
              sampleData.socialInfo.facebook ||
              sampleData.socialInfo.homePage) && (
              <div className="edit-wrapper">
                <UnderlineButton onClick={onAddClick}>수정</UnderlineButton>
              </div>
            )}
          </div>
        </div>
        <div className="description">
          포스트 및 블로그에서 보여지는 프로필에 공개되는 소셜 정보입니다.
        </div>
      </S.SettingItem>
      <S.SettingItem>
        <div className="wrapper">
          <div className="title-wrapper">
            <h3>이메일 주소</h3>
          </div>
          <div className="block-for-mobile">
            <div className="contents">{sampleData.userEmail}</div>
          </div>
        </div>
        <div className="description">
          회원 인증 또는 시스템에서 발송하는 이메일을 수신하는 주소입니다.
        </div>
      </S.SettingItem>
      <S.SettingItem>
        <div className="wrapper">
          <div className="title-wrapper">
            <h3>이메일 수신 설정</h3>
          </div>
          <div className="block-for-mobile">
            <div className="contents">
              <S.SocialInfoUl>
                <li>
                  <span style={{ width: "14rem" }}>댓글 알림</span>
                  {sampleData.toggle.commentNotification ? (
                    <S.ToggleDiv color="teal" onClick={onCommentToggleClick}>
                      <div
                        className="circle"
                        style={{
                          transform: "translate(1.375rem)",
                          boxShadow: "rgba(0, 0, 0, 0.1) -2px 0px 4px",
                        }}
                      ></div>
                    </S.ToggleDiv>
                  ) : (
                    <S.ToggleDiv color="gray" onClick={onCommentToggleClick}>
                      <div
                        className="circle"
                        style={{
                          transform: "translate(0rem)",
                          boxShadow: "rgba(0, 0, 0, 0.05) 2px 0px 4px",
                        }}
                      ></div>
                    </S.ToggleDiv>
                  )}
                </li>
                <li style={{ marginTop: "0.5rem" }}>
                  <span style={{ width: "14rem" }}>벨로그 업데이트 소식</span>
                  {sampleData.toggle.updateNotification ? (
                    <S.ToggleDiv color="teal" onClick={onUpdateToggleClick}>
                      <div
                        className="circle"
                        style={{
                          transform: "translate(1.375rem)",
                          boxShadow: "rgba(0, 0, 0, 0.1) -2px 0px 4px",
                        }}
                      ></div>
                    </S.ToggleDiv>
                  ) : (
                    <S.ToggleDiv color="gray" onClick={onUpdateToggleClick}>
                      <div
                        className="circle"
                        style={{
                          transform: "translate(0rem)",
                          boxShadow: "rgba(0, 0, 0, 0.05) 2px 0px 4px",
                        }}
                      ></div>
                    </S.ToggleDiv>
                  )}
                </li>
              </S.SocialInfoUl>
            </div>
          </div>
        </div>
      </S.SettingItem>
      <S.SettingItem>
        <div className="wrapper">
          <div className="title-wrapper">
            <h3>회원 탈퇴</h3>
          </div>
          <div className="block-for-mobile">
            <div className="contents">
              <SquareButton color="red">회원 탈퇴</SquareButton>
            </div>
          </div>
        </div>
        <div className="description">
          탈퇴 시 작성하신 포스트 및 댓글이 모두 삭제되며 복구되지 않습니다.
        </div>
      </S.SettingItem>
    </S.RestSettingSection>
  );
};

export default RestSetting;
