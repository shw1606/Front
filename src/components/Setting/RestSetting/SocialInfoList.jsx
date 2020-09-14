import React from "react";
import * as S from "./style";
import {
  AiFillGithub,
  AiOutlineTwitter,
  FaFacebookSquare,
  IoMdHome,
  GrMail,
} from "react-icons/all";

const SocialInfoList = ({ socialInfo }) => {
  return (
    <S.SocialInfoUl>
      {socialInfo.email && (
        <li>
          <GrMail />
          <span>{socialInfo.email}</span>
        </li>
      )}
      {socialInfo.github && (
        <li>
          <AiFillGithub />
          <span>{socialInfo.github}</span>
        </li>
      )}
      {socialInfo.twitter && (
        <li>
          <AiOutlineTwitter />
          <span>{socialInfo.twitter}</span>
        </li>
      )}
      {socialInfo.facebook && (
        <li>
          <FaFacebookSquare />
          <span>{socialInfo.facebook}</span>
        </li>
      )}
      {socialInfo.homePage && (
        <li>
          <IoMdHome />
          <span>{socialInfo.homePage}</span>
        </li>
      )}
    </S.SocialInfoUl>
  );
};

export default SocialInfoList;
