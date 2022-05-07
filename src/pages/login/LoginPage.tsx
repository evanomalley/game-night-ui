import React, { FunctionComponent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiErrorCircle } from "react-icons/bi";
import { useAuth } from "../../hooks/UseAuth";

import styled from "styled-components";
import useForm from "../../hooks/useForm";
import { ApiEndPointsUtil } from "../../api/apiEndPointsUtil";
import { AxiosResponse } from "axios";
import { CheckBox, Form, StyledContainer, TextInput } from "../../components";

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

const StyledError = styled.div`
  background: ${(props) => props.theme.colors.action.error};
  margin: 0 15px;
  height: 30px;
  padding: 10px;
  display: flex;
  align-items: center;
  svg {
    height: 24px;
    width: 24px;
  }
  div {
    padding-left: 15px;
  }
`;

const defaultValues = {
  email: "test@gmail.com",
  password: "test",
};

export const LoginPage: FunctionComponent = () => {
  const navigate = useNavigate();

  const { setAuth, persist, setPersist } = useAuth();
  const [showErrorMsg, setShowErrorMsg] = useState(false);

  const { handleChange, values, handleSubmit, errors } = useForm({
    onSubmitEndpoint: ApiEndPointsUtil.login,
    defaultValues: defaultValues,
  });

  const loginUser = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    const response = (await handleSubmit()) as AxiosResponse;
    if (response?.data) {
      const accessToken = response.data?.accessToken;
      const email = values.email;

      setAuth({ email, accessToken });
      navigate("/home/dashboard");
    } else {
      setShowErrorMsg(true);
    }
  };

  useEffect(() => {
    localStorage.setItem("persist", persist.toString());
  }, [persist]);

  return (
    <StyledDiv>
      {showErrorMsg && (
        <StyledError>
          <BiErrorCircle />
          <div>Invalid username or password</div>
        </StyledError>
      )}
      <Form title="Login" submitLabel="Sign In" onSubmit={loginUser}>
        <TextInput
          id="email"
          label="Email"
          type="email"
          value={values.email}
          onChange={handleChange}
          error={errors.email}
          placeholder="email"
        />
        <br />
        <TextInput
          id="password"
          label="password"
          type="password"
          value={values.password}
          onChange={handleChange}
          error={errors.password}
          placeholder="Password"
        />
        <br />
        <CheckBox
          id={"persist"}
          label={"Stay logged in"}
          checked={persist}
          onChange={setPersist}
        />
      </Form>
      <span>
        Don't have an account sign up <Link to="/register">here</Link>
      </span>
    </StyledDiv>
  );
};
