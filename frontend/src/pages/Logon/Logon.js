import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import { Col } from 'react-awesome-styled-grid';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { H1 } from '../../components/Headings';
import Link from '../../components/Link';
import {
  Container,
  Row,
  FormWrapper,
  Logo,
  Heroes,
} from './styles';

import heroesImg from '../../assets/heroes.png';
import logo from '../../assets/logo.svg'

import api from '../../services/api';

const Logon = () => {
  const history = useHistory();
  const [id, setId] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await api.post('/sessions', { id });
      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', data.name)
      history.push('/profile')
    } catch (error) {
      alert('Erro no login. Tente novamente.')
    }
  }
  return (
    <Container>
      <Row>
        <Col xs={4} sm={3} justify="center">
          <FormWrapper>
            <Logo src={logo} alt="Be The Hero" />
            <form onSubmit={handleLogin}>
              <H1>Faça seu logon</H1>
              <Input
                placeholder="Sua ID"
                value={id}
                onChange={e => setId(e.target.value)}
              />
              <Button type="submit">
                Entrar
              </Button>
              <Link to="/register">
                <FiLogIn size={16} color="#E02041" />
                Não tenho cadastro
              </Link>
            </form>
          </FormWrapper>
        </Col>
        <Col xs={4} sm={5} justify="center" align="center">
          <div>
            <Heroes src={heroesImg} alt="Heroes" />
          </div>
        </Col>
      </Row>
    </Container>
  )
};    

export default Logon;
