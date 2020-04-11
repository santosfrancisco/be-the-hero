import styled from 'styled-components'
import { Container as AwesomeContainer, Row as AwesomeRow } from 'react-awesome-styled-grid';

export const Container = styled(AwesomeContainer)`
  height: 100vh;
  align-items: center;
`;

export const Row = styled(AwesomeRow)`
  height: 100%;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Logo = styled.img`
  margin-bottom: 32px;
`;

export const Text = styled.p`
  font-size: 18px;
  line-height: 32px;
  color: #737380;
`; 

export const ButtonsWrapper = styled.div`
  display: flex;
  button + button {
    margin-left: 16px;
  }
`;
