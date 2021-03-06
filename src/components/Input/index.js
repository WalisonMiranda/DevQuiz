import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";

const InputBase = styled.input`
  width: 100%;
  padding: 15px;
  font-size: 14px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  /* color: ${({ theme }) => theme.contrastText}; */
  color: #ffffff;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: ${({ theme }) => theme.borderRadius};
  outline: 0;
  margin-bottom: 25px;

  ::placeholder {
    color: #c1c1c1;
  }
`;

export default function Input({ onChange, placeholder }) {
  return (
    <div>
      <InputBase 
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}

Input.defaultProps = {
    value: '',
};

Input.PropTypes = {
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
};
