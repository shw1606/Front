import React from 'react';
import * as S from './style';
import { Link } from 'react-router-dom';
import {
  AiFillGithub,
  AiOutlineTwitter,
  FaFacebookSquare,
  IoMdHome,
  GrMail,
} from "react-icons/all";

const UserProfileReferences = ({ userProfile }) => {
  const {profile_github, profile_twitter, profile_facebook, profile_homepage, profile_email} = userProfile;

  return (
    <S.UserProfileReferencesWrapper>
      {profile_github &&
        <Link to={profile_github}>
          <AiFillGithub/>
        </Link>
      }
      {profile_twitter &&
        <Link to={profile_twitter}>
          <AiOutlineTwitter/>
        </Link>
      }
      {profile_facebook &&
        <Link to={profile_facebook}>
          <FaFacebookSquare/>
        </Link>
      }
      {profile_homepage &&
        <Link to={profile_homepage}>
          <IoMdHome/>
        </Link>
      }
      {profile_email &&
        <Link to={profile_email}>
          <GrMail/>
        </Link>
      }
    </S.UserProfileReferencesWrapper>
  );
};

export default UserProfileReferences;