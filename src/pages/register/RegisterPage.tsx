import React, { FunctionComponent } from "react";
import { Link, useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";
import validateRegisterInfo from "./ValidateRegisterInfo";
import styled from "styled-components";
import { ApiEndPointsUtil } from "../../api/apiEndPointsUtil";
import { Form, StyledContainer, TextInput } from "../../components";

const StyledDiv = styled(StyledContainer)`
  margin: 100px auto;
  width: 40%;
  min-width: 150px;
  position: relative;
  @media (max-width: 767px) {
    width: 100%;
  }

  a {
    text-decoration: none;
    color: #27cdff;
    :hover {
      text-decoration: underline;
    }
  }
`;

const defaultValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const RegisterPage: FunctionComponent = () => {
  const { handleChange, values, handleSubmit, errors } = useForm({
    validate: validateRegisterInfo,
    onSubmitEndpoint: ApiEndPointsUtil.registerNewUser,
    defaultValues: defaultValues,
  });

  const navigate = useNavigate();

  const onFormSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const result = await handleSubmit();

    if (result) navigate("/login");
  };

  return (
    <StyledDiv>
      <Form
        title="Create an account to start orginizing your next game night!"
        submitLabel="Sign Up"
        onSubmit={onFormSubmit}
      >
        <TextInput
          id="name"
          label="Name"
          type="text"
          value={values.name}
          onChange={handleChange}
          error={errors.name}
          placeholder="Name"
        />
        <br />
        <TextInput
          id="email"
          label="Email"
          type="email"
          value={values.email}
          onChange={handleChange}
          error={errors.email}
          placeholder="Email"
        />
        <br />
        <TextInput
          id="password"
          label="Password"
          type="password"
          value={values.password}
          onChange={handleChange}
          error={errors.password}
          placeholder="Password"
        />
        <br />
        <TextInput
          id="confirmPassword"
          label="Confirm Password"
          type="password"
          value={values.confirmPassword}
          onChange={handleChange}
          error={errors.confirmPassword}
          placeholder="Confirm Password"
        />
        <br />
      </Form>
      <span>
        Already have an account? log in <Link to="/login">here</Link>
      </span>
    </StyledDiv>
  );
};
