import styled from 'styled-components'
import { Container as AwesomeContainer, Row as AwesomeRow } from 'react-awesome-styled-grid';
import { Link as RouterLink } from 'react-router-dom';

export const Container = styled(AwesomeContainer)`
  height: 100vh;
  align-items: center;
`;

export const Row = styled(AwesomeRow)`

`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Logo = styled.img`
  margin-bottom: 32px;
`;

export const Heroes = styled.img`
  width: 100%;
  max-width: 640px;
`;

export const Link = styled(RouterLink)`
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