import styled from "styled-components";
import { Link } from "react-router-dom";

export const Layout = styled.div`
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  line-height: 1.5;
  border-bottom: 1px solid #ebebeb;
`;

export const Title = styled.h3`
  font-size: 1.5rem;
  margin-top: 0px;
  margin-bottom: 1.5rem;
  color: rgb(52, 58, 64);
`;

export const Payload = styled.p`
  font-size: 1rem;
  margin-top: 0px;
  margin-bottom: 1rem;
  color: rgb(73, 80, 87);
`;

export const BottomContainer = styled.section`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  font-size: 0.875rem;
  div {
    color: rgb(134, 142, 150);
  }
`;

export const DeleteButton = styled.button`
  cursor: pointer;
  color: rgb(52, 58, 64);
  font-size: inherit;
  text-decoration: underline;
  outline: none;
  border-width: initial;
  border-style: none;
  border-color: initial;
  border-image: initial;
  background: none;
  padding: 0px;
`;

export const SLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;
