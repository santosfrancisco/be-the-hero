import styled from 'styled-components';

export const Image = styled.img`
height: 60px;
`;

export const LogoutButton = styled.button`
  height: 60px;
  width: 60px;
  background: transparent;
  border-radius: 8px;
  border: 1.5px solid #DCDCE6;
  font-weight: bold;
  transition: filter .2s;
  margin-left: 16px;

  &:hover {
    filter: brightness(90%);
  }
`;
