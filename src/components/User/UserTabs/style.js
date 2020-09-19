import styled from 'styled-components';
import { Link } from "react-router-dom";

export const TabsWrapper = styled.div`
  margin-top: 7rem;
  text-align: center;
  @media (max-width: 768px) {
    margin-top: 3rem;
  }
`;

export const UserTab = styled(Link)`
  display: inline-block;
  color: ${(props) => (props.active === 1 ? '#20c997' : '#495057')};
  border-bottom: ${(props) => (props.active === 1 ? '2.5px solid #20c997' : 'none')};
  transition: all 0.3s, transform 0.3s;
  width: 10rem;
  height: 3rem;
  font-size: 1.6rem;
  font-weight: bold;
  @media (max-width: 768px) {
    font-size: 16px;
    width: calc(100% / 3);
    height: 30px;
  }
`;
