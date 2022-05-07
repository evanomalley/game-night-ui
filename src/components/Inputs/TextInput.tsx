import styled from "styled-components";

const StyledInput = styled.input`
  display: block;
  outline: none;
  border-radius: 2px;
  height: 40px;
  width: 100%;
  border: none;
  ::placeholder {
    color: #595959;
    font-size: 12px;
  }
  &.error {
    border: 2px #e91429 solid;
  }
`;

const StyledLabel = styled.label`
  display: flex;
  font-size: 0.8rem;
  margin-bottom: 6px;
  color: #fff;
`;

const StyledErrorText = styled.p`
  font-size: 0.8rem;
  margin-top: 0.5rem;
  color: #e91429;
`;

type inputProps = {
  value: string;
  id: string;
  onChange: (e: { target: { id: string; value: string } }) => void;
  label?: string;
  type?: "text" | "email" | "password";
  error?: string;
  placeholder?: string;
};

export const TextInput = (props: inputProps) => {
  const { id, label, value, onChange, type, error, placeholder } = props;

  let errorClass = "";

  if (error?.length) {
    errorClass = "error";
  }

  return (
    <div>
      {label && <StyledLabel htmlFor={id}>{label}</StyledLabel>}
      <StyledInput
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={errorClass}
      />
      {error && <StyledErrorText>{error}</StyledErrorText>}
    </div>
  );
};
