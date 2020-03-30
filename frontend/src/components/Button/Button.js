import styled from "styled-components";

const Button = styled.button`
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

export default Button;
