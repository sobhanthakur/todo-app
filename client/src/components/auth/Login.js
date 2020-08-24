import React, { useState } from "react";
import {
  Card,
  Button,
  CardHeader,
  CardFooter,
  Form,
  FormGroup,
  Input,
} from "reactstrap";
import { Link, Redirect } from "react-router-dom";
import { login } from "../../redux/actions/authAction";
import { useSelector, useDispatch } from "react-redux";

const Login = () => {
  const authenticated = useSelector((state) => ({
    auth: state.authReducer.isAuthenticated,
  }));

  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const changeFormData = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    await dispatch(login(email, password));
  };

  // Redirect if logged in
  if (authenticated.auth) {
    return <Redirect to="/dashboard"></Redirect>;
  }

  return (
    <div className="container mt-5" id="loginCustom">
      <Card className="text-center">
        <CardHeader tag="h3">Sign In Here</CardHeader>
        <Form className="m-2" onSubmit={(e) => onSubmit(e)}>
          <FormGroup>
            <Input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => changeFormData(e)}
              required
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => changeFormData(e)}
              required
            />
          </FormGroup>
          <FormGroup>
            <Button color="info">Log In</Button>{" "}
          </FormGroup>
          <Link to="/forgot-password">Forgot/reset password</Link>
        </Form>
        <CardFooter>
          <Link to="/register">New User? Sign Up here</Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
