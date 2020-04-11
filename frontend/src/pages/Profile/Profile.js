import React from 'react'
import { Row, Col } from 'react-awesome-styled-grid';
import Header from '../../components/Header';
import CardList from '../../components/CardList/CardList';
import { H1 } from '../../components/Headings';
import { Container } from './styles';

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
