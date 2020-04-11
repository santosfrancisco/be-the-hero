import React from 'react'
import { FiArrowLeft } from 'react-icons/fi';
import { Col } from 'react-awesome-styled-grid';
import Header from '../../components/Header';
import CardList from '../../components/CardList/CardList';
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


const Register = () => {
  return (
    <Container>
    <Row>
      <Col xs={4}>
        <Header />
      </Col>
    </Row>
      <Row>
        <Col xs={4}>
          <H1>Casos cadastrados</H1>
        </Col>
      </Row>
      <Row>
        <Col xs={4}>
          <CardList />
        </Col>
      </Row>
    </Container>
  )
};    

export default Register;
