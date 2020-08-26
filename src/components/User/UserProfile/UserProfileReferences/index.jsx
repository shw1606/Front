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
        <a href={profile_github} target="_blank"> <AiFillGithub/> </a>
      }
      {profile_twitter &&
        <a href={profile_twitter} target="_blank"> <AiOutlineTwitter/> </a>
      }
      {profile_facebook &&
        <a href={profile_facebook} target="_blank"> <FaFacebookSquare/> </a>
      }
      {profile_homepage &&
        <a href={profile_homepage} target="_blank"> <IoMdHome/> </a>
      }
      {profile_email &&
        <a href={`mailto:${profile_email}`}> <GrMail/> </a>
      }
    </S.UserProfileReferencesWrapper>
  );
};

export default UserProfileReferences;