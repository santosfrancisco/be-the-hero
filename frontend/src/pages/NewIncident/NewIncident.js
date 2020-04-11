import React from 'react'
import { FiArrowLeft } from 'react-icons/fi';
import { Col } from 'react-awesome-styled-grid';
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
            <form>
              <Input placeholder="Título do caso" />
              <Textarea rows="6" placeholder="Descrição" />
              <Input placeholder="Valor em reais" />
              <ButtonsWrapper>
                <SecondaryButton onClick={() => console.log('cancel')}>
                  Cancelar
                </SecondaryButton>
                <Button type="submit" onClick={() => console.log('submit')}>
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
