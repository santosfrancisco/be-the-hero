import React from 'react';
import { Row, Col } from 'react-awesome-styled-grid';
import Card from '../Card';

const CardList = ({ items, onDelete }) => {
  return (
    <Row>
      {items.map(incident => (
        <Col xs={4} sm={4}>
          <Card key={incident.id} onDelete={onDelete} {...incident} />
        </Col>
        )
      )}
    </Row>
  )
}

export default CardList;
