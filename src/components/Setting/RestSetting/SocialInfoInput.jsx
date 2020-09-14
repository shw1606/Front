import React from "react";
import * as S from "./style";
import {
  AiFillGithub,
  AiOutlineTwitter,
  FaFacebookSquare,
  IoMdHome,
  GrMail,
} from "react-icons/all";
import { useState, useCallback } from "react";
import SquareButton from "../../Common/SquareButton";

const SocialInfo = ({ onSubmit, socialInfo }) => {
  const [email, setEmail] = useState(socialInfo.email);
  const [github, setGithub] = useState(socialInfo.github);
  const [twitter, setTwitter] = useState(socialInfo.twitter);
  const [facebook, setFacebook] = useState(socialInfo.facebook);
  const [homePage, setHomePage] = useState(socialInfo.homePage);
  const onChange = useCallback((e) => {
    switch (e.target.name) {
      case "email":
        console.log(e.target.value);
        setEmail(e.target.value);
        break;
      case "github":
        console.log(e.target.value);
        setGithub(e.target.value);
        break;
      case "twitter":
        console.log(e.target.value);
        setTwitter(e.target.value);
        break;
      case "facebook":
        console.log(e.target.value);
        setFacebook(e.target.value);
        break;
      case "homePage":
        console.log(e.target.value);
        setHomePage(e.target.value);
        break;
      default:
        return;
    }
  }, []);

  return (
    <S.SocialInfoForm onSubmit={onSubmit}>
      <S.InfoList>
        <li>
          <GrMail />
          <label>
            <S.InfoInput
              type="text"
              name="email"
              placeholder="이메일을 입력하세요."
              value={email}
              onChange={onChange}
            />
          </label>
        </li>
        <li>
          <AiFillGithub />
          <label>
            <S.InfoInput
              type="text"
              name="github"
              placeholder="Github 계정을 입력하세요."
              value={github}
              onChange={onChange}
            />
          </label>
        </li>
        <li>
          <AiOutlineTwitter />
          <label>
            <S.InfoInput
              type="text"
              name="twitter"
              placeholder="Twitter 계정을 입력하세요."
              value={twitter}
              onChange={onChange}
            />
          </label>
        </li>
        <li>
          <FaFacebookSquare />
          <S.FacebookInputDiv>
            <span>https://www.facebook.com/</span>
            <label>
              <input
                type="text"
                name="facebook"
                value={facebook}
                onChange={onChange}
              />
            </label>
          </S.FacebookInputDiv>
        </li>
        <li>
          <IoMdHome />
          <label>
            <S.InfoInput
              type="text"
              name="homePage"
              placeholder="홈페이지 주소를 입력하세요."
              value={homePage}
              onChange={onChange}
            />
          </label>
        </li>
      </S.InfoList>
      <div className="button-wrapper">
        <SquareButton type="submit">저장</SquareButton>
      </div>
    </S.SocialInfoForm>
  );
};
export default SocialInfo;
