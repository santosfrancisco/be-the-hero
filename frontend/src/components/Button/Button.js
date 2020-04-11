import styled from "styled-components";
import { Link } from "react-router-dom";

const Button = styled.button.attrs(props => ({
  type: props.type || 'button',
}))`
  width: 100%;
  height: 60px;
  color: #F0F0F5;
  background: #E02041;
  border-radius: 8px;
  border: none;
  font-weight: bold;
  transition: filter .2s;

  &:hover {
    filter: brightness(90%);
  }
`;

export const SecondaryButton = styled.button.attrs(props => ({
  type: props.type || 'button',
}))`
  width: 100%;
  height: 60px;
  color: #999;
  background: transparent;
  border-radius: 8px;
  border: 2.5px solid #DCDCE6;
  font-weight: bold;
  transition: filter .2s;

  &:hover {
    filter: brightness(90%);
  }
`;

export const LinkButton = styled(Link)`
  display: flex;
  width: 100%;
  height: 60px;
  color: #F0F0F5;
  background: #E02041;
  border-radius: 8px;
  border: none;
  font-weight: bold;
  -webkit-transition: filter .2s;
  transition: filter .2s;
  align-items: center;
  justify-content: center;
  text-decoration: none;

  &:hover {
    filter: brightness(90%);
  }
`;

export default Button;
