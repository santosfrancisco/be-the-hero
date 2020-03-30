import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #41414D;
  margin-top: 32px;
  font-size: 18px;
  font-weight: bold;
  transition: opacity .2s;

  &:hover {
    opacity: .8;
  }
  svg {
    margin-right: 16px;
  }
`;
