import React from 'react'
import { FiArrowLeft } from 'react-icons/fi';
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
  Text,
} from './styles';

import logo from '../../assets/logo.svg'

const Register = () => {
  return (
    <Container>
      <Row>
        <Col xs={4} sm={3} justify="center">
          <Logo src={logo} alt="Be The Hero" />
            <H1>Cadastro</H1>
          <Text>
            Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.
          </Text>
          <Link to="/">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar para o logon
          </Link>
        </Col>
        <Col xs={4} sm={5} justify="center">
          <FormWrapper>
            <form>
              <Input placeholder="Nome da ONG" />
              <Input placeholder="Email" />
              <Input placeholder="WhatsApp" />
              <Input width="80%" placeholder="Cidade" />
              <Input width="20%" placeholder="UF" />
              <Button type="submit" onClick={() => console.log('submit')}>
                Cadastrar
              </Button>
            </form>
          </FormWrapper>
        </Col>
      </Row>
    </Container>
  )
};    

export default Register;
