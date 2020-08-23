import styled from 'styled-components';
import {Link} from "react-router-dom";

export const TabsWrapper = styled.div`
  margin-top: 2.5rem;
  text-align: center;
`;

export const UserTab = styled(Link)`
  color: ${props => props.active === 1 ? '#20c997' : '#212529'};
  padding: 0 2rem;
  font-size: 1.5rem;
  font-weight: bold;
`;
