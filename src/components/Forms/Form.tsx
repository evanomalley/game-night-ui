import styled from "styled-components";
import { PrimaryButton } from "../Buttons/PrimaryButton";

const StyledForm = styled.form`
  margin: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 1rem;
    text-align: start;
    margin-bottom: 1rem;
    color: #fff;
  }
  span {
    font-size: 0.8rem;
    margin-top: 10px;
    color: #fff;
    width: 80%;
    text-align: center;
  }
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
`;

type FormTypeProps = {
  title: string;
  submitLabel: string;
  onSubmit: (event: React.SyntheticEvent) => Promise<void>;
  children: any;
};

export const Form = (props: FormTypeProps) => {
  const { title, submitLabel, onSubmit, children } = props;

  return (
    <StyledForm onSubmit={onSubmit}>
      <h1>{title}</h1>
      {children}
      <InputContainer>
        <PrimaryButton type="submit">{submitLabel}</PrimaryButton>
      </InputContainer>
    </StyledForm>
  );
};
