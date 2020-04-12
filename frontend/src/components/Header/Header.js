import React from 'react'
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import logo from '../../assets/logo.svg'
import { LinkButton } from '../Button';
import { FiPower } from 'react-icons/fi';
import {
  Image,
  LogoutButton,
} from './styles';

const Header = ({ className }) => {
  const history = useHistory();
  const ongName = localStorage.getItem('ongName')

  const handleLogout = () => {
    localStorage.clear()
    history.push('/')
  }

  return (
    <header className={className}>
      <Image src={logo} alt="Be the hero" />
      <span>Bem vinda, {ongName}</span>
      <LinkButton to="/incidents/new">
        Cadastrar novo caso
      </LinkButton>
      <LogoutButton onClick={handleLogout} type="button">
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
