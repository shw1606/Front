import styled from 'styled-components';
import { Link } from "react-router-dom";

export const TabsWrapper = styled.div`
  margin-top: 2rem;
`;

export const Tab = styled(Link)`
  display: inline-block;
  color: ${(props) => (props.active === 1 ? '#343a40' : '#868e96')};
  border-bottom: ${(props) => (props.active === 1 ? '2.5px solid #343a40' : 'none')};
  transition: all 0.3s, transform 0.3s;
  padding: 0.5em;
  text-align: center;
  font-size: 13.5px;
  font-weight: bold;
`;
