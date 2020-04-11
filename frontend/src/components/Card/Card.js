import React from 'react';
import styled from 'styled-components';
import { FiTrash2 } from 'react-icons/fi'

const Card = ({ className }) => (
  <div className={className}>
    <strong>CASO:</strong>
    <p>Caso 1 teste</p>

    <strong>DESCRIÇÃO:</strong>
    <p>Descrição teste</p>

    <strong>VALOR:</strong>
    <p>R$ 200,00</p>

    <button
      className="card__btn-trash"
      type="button"
    >
      <FiTrash2 size={20} color="#a8a8b3"/>
    </button>  
  </div>
);

export default styled(Card)`
position: relative;
  background: #fff;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 24px;

  strong {
    display: block;
    margin-bottom: 16px;
    color: #41414d;
  }

  p + strong {
    margin-top: 32px;
  }

  p {
    color: #737380;
    line-height: 21px;
  }

  .card__btn-trash {
    background: transparent;
    border: none;
    position: absolute;
    right: 16px;
    top: 16px;
    &:hover {
      opacity: .6;
    }
  }
`;
