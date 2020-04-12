import React from 'react';
import { Row, Col } from 'react-awesome-styled-grid';
import Card from '../Card';

const CardList = ({ items, onDelete }) => {
  return (
    <Row>
      {items.map(incident => (
        <Col key={incident.id} xs={4} sm={4}>
          <Card onDelete={onDelete} {...incident} />
        </Col>
        )
      )}
    </Row>
  )
}

export default CardList;
