import styled from "styled-components";
import { Link } from "react-router-dom";

export const HomePostStyle = styled.li`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 19rem;
  margin: 1rem;
  border-radius: 4px;
  background: white;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 4px 16px 0px;
  transition: box-shadow 0.25s ease-in 0s, transform 0.25s ease-in 0s;
  @media (max-width: 944px) {
    width: calc(50% - 2rem);
  }
  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const PostImage = styled(Link)`
  display: block;
  color: inherit;
  text-decoration: none;
  a:-webkit-any-link {
    color: -webkit-link;
    cursor: pointer;
    text-decoration: underline;
  }
  div {
    position: relative;
    width: 100%;
    padding-top: 52.1921%;
    img {
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
      display: block;
      object-fit: cover;
    }
  }
`;

export const MainInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  flex: 1 1 0%;
`;

export const Payload = styled(Link)`
  display: block;
  color: inherit;
  text-decoration: none;
  h4 {
    font-size: 1rem;
    line-height: 1.5;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow-x: hidden;
    overflow-y: hidden;
    color: rgb(33, 37, 41);
    margin: 0px 0px 0.25rem;
    @media (max-width: 767px) {
      white-space: initial;
    }
  }
  p {
    word-break: break-word;
    overflow-wrap: break-word;
    font-size: 0.875rem;
    line-height: 1.5;
    height: 3.9375rem;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    color: rgb(73, 80, 87);
    margin: 0px 0px 1.5rem;
    overflow: hidden;
  }
`;

export const Date = styled.div`
  font-size: 0.75rem;
  line-height: 1.5;
  color: rgb(134, 142, 150);
  .separator {
    margin-left: 0.25rem;
    margin-right: 0.25rem;
  }
`;

export const SubInfo = styled.div`
  display: flex;
  font-size: 0.75rem;
  line-height: 1.5;
  -webkit-box-pack: justify;
  justify-content: space-between;
  padding: 0.625rem 1rem;
  border-top: 1px solid rgb(248, 249, 250);
  a {
    color: inherit;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    text-decoration: none;
    img {
      object-fit: cover;
      width: 1.5rem;
      height: 1.5rem;
      display: block;
      margin-right: 0.5rem;
      border-radius: 50%;
    }
    span {
      color: rgb(134, 142, 150);
      b {
        color: rgb(52, 58, 64);
      }
    }
  } /* a */
  .likes {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    svg {
      width: 0.75rem;
      height: 0.75rem;
      margin-right: 0.5rem;
    }
  } /* .likes */
`;
