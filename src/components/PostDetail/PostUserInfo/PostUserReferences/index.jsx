import React, { useState, useCallback } from "react";
import * as S from "./style";
import {
  AiFillGithub,
  AiOutlineTwitter,
  FaFacebookSquare,
  IoMdHome,
  GrMail,
} from "react-icons/all";
import { Link } from "react-router-dom";

const PostUserReferences = () => {
  const [mailHoverBool, setMailHoverBool] = useState(false);

  const onCursorOverMail = useCallback((e) => {
    setMailHoverBool(true);
  }, []);
  const onCursorOutMail = useCallback((e) => {
    setMailHoverBool(false);
  }, []);
  return (
    <S.UserReferencesContainer>
      <Link to="">
        <AiFillGithub />
      </Link>
      <Link to="">
        <AiOutlineTwitter />
      </Link>
      <Link to="">
        <FaFacebookSquare />
      </Link>
      <Link to="">
        <IoMdHome />
      </Link>
      <a
        href="mailto:example@example.co.kr"
        onMouseOver={onCursorOverMail}
        onMouseOut={onCursorOutMail}
      >
        <GrMail />
      </a>
      {mailHoverBool && (
        <S.MailAddressDiv>
          <div>example@example.com</div>
        </S.MailAddressDiv>
      )}
    </S.UserReferencesContainer>
  );
};
export default PostUserReferences;
