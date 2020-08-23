import styled from 'styled-components';
import {Link} from "react-router-dom";

export const UserPostCard = styled.div`
  width: 100%;
  margin-bottom: 3rem;
  border-bottom: 1px solid #e9ecef;
  h2 {
    font-size: 2rem;
    margin: 1rem 0;
    a {
    color: #212529;
    }
  }
`;

export const PostImageWrapper = styled.div`
  display: block;
  color: inherit;
  text-decoration: none;
  a:-webkit-any-link {
    color: -webkit-link;
    cursor: pointer;
    text-decoration: underline;
  }
  position: relative;
  width: 100%;
  padding-top: 52.1921%;
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }
`;

export const PostContent = styled.div`
  font-size: 1.3rem;
  color: #495057;
`;

export const TagsWrapper = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-wrap: wrap;
`;

export const Tag = styled(Link)`
  border-radius: 15px;
  margin-right: 1em;
  margin-bottom: 0.6em;
  padding: 0.3em 1em;
  color: #0ca678;
  font-size: 1.3rem;
  background-color: #f1f3f5;
  &:hover {
    background-color: #f8f9fa;
  }
`;

export const PostSubInfo = styled.div`
  display: flex;
  margin-top: 0.3em;
  margin-bottom: 3rem;
  span {
    margin-right: 1em;
    color: #868e96;
  }
  svg {
    height: 1rem;
    margin-right: 0.5em;
    color: black;
  }
`;
