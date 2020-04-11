import React from 'react'
import styled from 'styled-components';
import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom';
import { LinkButton } from '../Button';
import { FiPower } from 'react-icons/fi';

const Image = styled.img`
  height: 60px;
`;

const LogoutButton = styled.button`
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

const Header = ({ className }) => {
  return (
    <header className={className}>
      <Image src={logo} alt="Be the hero" />
      <span>Bem vinda, APAD</span>
      <LinkButton to="/incidents/new">Cadastrar novo caso</LinkButton>
      <LogoutButton type="button">
        <FiPower size={24} color="#E02041" />
      </LogoutButton>
    </header>
  )
};

export default styled(Header)`
  display: flex;
  align-items: center;
  margin: 32px 0;
  span {
    font-size: 20px;
    margin-left: 24px;
  }
  ${LinkButton} {
    margin-left: auto;
    max-width: 262px; 
  }
`;
