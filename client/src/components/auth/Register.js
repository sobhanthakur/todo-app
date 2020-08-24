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
import { register } from "../../redux/actions/authAction";
import { useSelector, useDispatch } from "react-redux";

const Register = () => {
  const authenticated = useSelector((state) => ({
    auth: state.authReducer.isAuthenticated,
  }));

  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: ""
  });

  const { email, password, name } = formData;

  const changeFormData = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    await dispatch(register(formData));
  };

  // Redirect if logged in
  if (authenticated.auth) {
    return <Redirect to="/dashboard"></Redirect>;
  }

  return (
    <div className="container mt-5" id="loginCustom">
      <Card className="text-center">
        <CardHeader tag="h3">Sign Up Here</CardHeader>
        <Form className="m-2" onSubmit={e => onSubmit(e)}>
        <FormGroup>
            <Input
              type="text"
              name="name"
              placeholder="Enter your Name"
              value={name}
              onChange={(e) => changeFormData(e)}
              required
            />
          </FormGroup>  
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
            <Button color="info">Sign Up</Button>{" "}
          </FormGroup>
        </Form>
        <CardFooter>
          <Link to="/">Back to Login</Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Register;
