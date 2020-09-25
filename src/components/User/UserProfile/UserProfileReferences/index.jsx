import React from 'react';
import {
  AiFillGithub,
  AiOutlineTwitter,
  FaFacebookSquare,
  IoMdHome,
  GrMail,
} from "react-icons/all";
import * as S from './style';

const UserProfileReferences = ({ userProfile }) => {
  const { profile_github, profile_twitter, profile_facebook, profile_homepage, profile_email } = userProfile;

  return (
    <S.UserProfileReferencesWrapper>
      {profile_github && (
        <a href={profile_github} target="_blank" rel="noopener noreferrer">
          {' '}
          <AiFillGithub />
          {' '}
        </a>
      )}
      {profile_twitter && (
        <a href={profile_twitter} target="_blank" rel="noopener noreferrer">
          {' '}
          <AiOutlineTwitter />
          {' '}
        </a>
      )}
      {profile_facebook && (
        <a href={profile_facebook} target="_blank" rel="noopener noreferrer">
          {' '}
          <FaFacebookSquare />
          {' '}
        </a>
      )}
      {profile_homepage && (
        <a href={profile_homepage} target="_blank" rel="noopener noreferrer">
          {' '}
          <IoMdHome />
          {' '}
        </a>
      )}
      {profile_email && (
        <a href={`mailto:${profile_email}`} rel="noopener noreferrer">
          {' '}
          <GrMail />
          {' '}
        </a>
      )}
    </S.UserProfileReferencesWrapper>
  );
};

export default UserProfileReferences;
