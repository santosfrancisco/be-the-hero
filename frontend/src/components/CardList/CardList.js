import React from 'react';
import { Row, Col } from 'react-awesome-styled-grid';
import Card from '../Card';

const incidents = [
  {
    id: 1,
    title: '1'
  },{
    id: 2,
    title: '2'
  },{
    id: 3,
    title: '3'
  },{
    id: 4,
    title: '4'
  },{
    id: 5,
    title: '5'
  },
]

const CardList = () => {
  return (
    <Row>
      {incidents.map(incident => <Col xs={4} sm={4}><Card key={incident.id} /></Col>)}
    </Row>
  )
}

export default CardList;
