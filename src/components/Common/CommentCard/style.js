import styled from "styled-components";
import { Link } from "react-router-dom";

export const Layout = styled.div`
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid rgb(233, 236, 239);
`;

export const UserInfoConainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  -webkit-box-pack: justify;
  -webkit-box-align: center;
  .profile {
    display: flex;
    align-items: center;
    -webkit-box-align: center;
  }
`;

export const NameWrapper = styled.div`
  margin-left: 1rem;
  line-height: 1;
  .user-name {
    font-size: 1rem;
    font-weight: bold;
    color: rgb(52, 58, 64);
  }
  .date {
    margin-top: 0.5rem;
    color: rgb(134, 142, 150);
    font-size: 0.875rem;
  }
`;

export const LinkWrapper = styled(Link)`
  text-decoration: underline;
  color: -webkit-link;
  cursor: pointer;
  img {
    display: block;
    width: 3.375rem;
    height: 3.375rem;
    object-fit: cover;
    border-radius: 50%;
  }
`;

export const CommentText = styled.div`
  font-size: 1.125rem;
  color: rgb(34, 36, 38);
  line-height: 1.7;
  letter-spacing: -0.004em;
  word-break: keep-all;
  overflow-wrap: break-word;
  p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
`;
