import React, { useCallback, useRef } from "react";
import { withRouter } from "react-router-dom";
import { AiOutlineBranches } from "react-icons/ai";

// component
import Button from "../Button";

// style
import * as S from "./style";

// data
import * as D from "./data";

const SocialContainer = ({ match, location, history }) => {
  const socialRef = useRef();

  // 페이스북, 트위터, url 복사 버튼 출력/사라짐
  const openSocialButtons = useCallback(() => {
    for (const button of socialRef.current.childNodes) {
      button.classList.toggle("open");
    }
  }, []);

  return (
    <>
      <S.SocialButtonContainer>
        <div className="positioner" ref={socialRef}>
          {D.socialInfo.map((value) => {
            const { animation, icon, action, click } = value;
            const pageUrl = `localhost:3000${match.url}`;
            return (
              <S.SocialAnimation key={icon} animation={animation}>
                <Button
                  icon={icon}
                  action={action}
                  click={click}
                  pageUrl={pageUrl}
                  openSocialButtons={openSocialButtons}
                />
              </S.SocialAnimation>
            );
          })}
        </div>
      </S.SocialButtonContainer>
      <S.ButtonWrapper onClick={openSocialButtons}>
        <AiOutlineBranches />
      </S.ButtonWrapper>
    </>
  );
};

export default withRouter(SocialContainer);
