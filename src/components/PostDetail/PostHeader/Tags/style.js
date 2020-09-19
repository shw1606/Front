import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const TagsWrapper = styled.div`
  margin-top: 1rem;
  width: 100%;
`;

export const Tag = styled.span`
  height: 2rem;
  border-radius: 15px;
  margin-right: 1rem;
  padding: 0.3em 1rem;
  background-color: #f1f3f5;
`;

export const StyledLink = styled(Link)`
  color: #0ca678;
  font-size: 1rem;
`;
