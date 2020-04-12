import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { Col } from 'react-awesome-styled-grid';
import api from '../../services/api';
import Input, { Textarea } from '../../components/Input';
import Button, { SecondaryButton } from '../../components/Button';
import { H1 } from '../../components/Headings';
import Link from '../../components/Link';
import {
  Container,
  Row,
  FormWrapper,
  Logo,
  Text,
  ButtonsWrapper,
} from './styles';

import logo from '../../assets/logo.svg'

const NewIncident = () => {
  const history = useHistory();
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [value, setValue] = useState('')

  const ongId = localStorage.getItem('ongId');
  
  const handleRegister = async (e) => {
    e.preventDefault();
    const ongData = {
      title,
      description,
      value
    };

    try {
      await api.post('/incidents', ongData, {
        headers: {
          Authorization: ongId,
        }
      });
      history.push('/profile')
    } catch (error) {
      alert('Ocorreu um erro. Tente novamente.')
    }
  }
  return (
    <Container>
      <Row>
        <Col xs={4} sm={3} justify="center">
          <Logo src={logo} alt="Be The Hero" />
            <H1>Cadastrar novo caso</H1>
          <Text>
            Descreva o caso detalhadamente para encontrar um herói para resolver isso.
          </Text>
          <Link to="/profile">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar para a home
          </Link>
        </Col>
        <Col xs={4} sm={5} justify="center">
          <FormWrapper>
            <form onSubmit={handleRegister}>
              <Input
                placeholder="Título do caso"
                value={title}
                onChange={e => setTitle(e.target.value)}
              />
              <Textarea
                rows="6"
                placeholder="Descrição"
                value={description}
                onChange={e => setDescription(e.target.value)}
              />
              <Input
                placeholder="Valor em reais"
                value={value}
                onChange={e => setValue(e.target.value)}
              />
              <ButtonsWrapper>
                <SecondaryButton onClick={() => history.goBack()}>
                  Cancelar
                </SecondaryButton>
                <Button type="submit">
                  Cadastrar
                </Button>
              </ButtonsWrapper>
            </form>
          </FormWrapper>
        </Col>
      </Row>
    </Container>
  )
};    

export default NewIncident;
