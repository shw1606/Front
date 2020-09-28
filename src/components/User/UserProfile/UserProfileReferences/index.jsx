import React from 'react';
import PropTypes from 'prop-types';
import {
  AiFillGithub,
  AiOutlineTwitter,
  FaFacebookSquare,
  IoMdHome,
  GrMail,
} from "react-icons/all";
import * as S from './style';

const UserProfileReferences = ({
  profileGithub,
  profileTwitter,
  profileFacebook,
  profileHomepage,
  profileEmail
}) => (
  <S.UserProfileReferencesWrapper>
    {profileGithub && (
      <a href={profileGithub} target="_blank" rel="noopener noreferrer">
        <AiFillGithub />
      </a>
    )}
    {profileTwitter && (
      <a href={profileTwitter} target="_blank" rel="noopener noreferrer">
        <AiOutlineTwitter />
      </a>
    )}
    {profileFacebook && (
      <a href={profileFacebook} target="_blank" rel="noopener noreferrer">
        <FaFacebookSquare />
      </a>
    )}
    {profileHomepage && (
      <a href={profileHomepage} target="_blank" rel="noopener noreferrer">
        <IoMdHome />
      </a>
    )}
    {profileEmail && (
      <a href={`mailto:${profileEmail}`} rel="noopener noreferrer">
        <GrMail />
      </a>
    )}
  </S.UserProfileReferencesWrapper>
);

UserProfileReferences.propTypes = {
  profileGithub: PropTypes.string,
  profileTwitter: PropTypes.string,
  profileFacebook: PropTypes.string,
  profileHomepage: PropTypes.string,
  profileEmail: PropTypes.string
};

UserProfileReferences.defaultProps = {
  profileGithub: null,
  profileTwitter: null,
  profileFacebook: null,
  profileHomepage: null,
  profileEmail: null
};

export default UserProfileReferences;
