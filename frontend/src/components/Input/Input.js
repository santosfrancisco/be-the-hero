import styled from "styled-components";

export const Input = styled.input`
  width: ${({ width }) => (width || '100%')};
  height: 60px;
  color: #333;
  border: 1px solid #dcdce6;
  padding: 0 24px;
  border-radius: 8px;
  margin-bottom: 16px;
`;

export const Textarea = styled.textarea`
  width: ${({ width }) => (width || '100%')};
  color: #333;
  border: 1px solid #dcdce6;
  padding: 24px;
  border-radius: 8px;
  margin-bottom: 16px;
  resize: none;
`;
