import styled from "styled-components";

const Input = styled.input`
  width: ${({ width }) => (width || '100%')};
  height: 60px;
  color: #333;
  border: 1px solid #dcdce6;
  padding: 0 24px;
  border-radius: 8px;
  margin-bottom: 16px;
`;

export default Input;
