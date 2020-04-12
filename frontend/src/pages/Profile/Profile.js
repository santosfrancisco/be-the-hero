import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-awesome-styled-grid';
import api from '../../services/api';
import Header from '../../components/Header';
import CardList from '../../components/CardList/CardList';
import { H1 } from '../../components/Headings';
import { Container } from './styles';

const Register = () => {
  const [incidents, setIncidents] = useState([]);
  const ongId = localStorage.getItem('ongId');
  const getIncidents = () => {
    api.get('/profile', {
      headers: {
        Authorization: ongId
      }
    }).then(({ data }) => {
      setIncidents(data)
    })
  }
  useEffect(() => {
    getIncidents()
  }, [])

  const handleDeleteIncident = async (id) => {
    try {
      await api.delete(`/incidents/${id}`, {
        headers: {
          Authorization: ongId
        }
      })
      getIncidents()
    } catch (error) {
      alert('Erro ao deletar caso. Tente novamente.');
    }
  }
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
          <CardList
            onDelete={handleDeleteIncident}
            items={incidents}
          />
        </Col>
      </Row>
    </Container>
  )
};    

export default Register;
