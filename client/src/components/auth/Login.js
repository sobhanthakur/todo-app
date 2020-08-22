import React from "react";
import {
  Card,
  Button,
  CardHeader,
  CardFooter,
  CardBody,
  CardText,
  Form,
  FormGroup,
  Input,
} from "reactstrap";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="container mt-5" style={{ width: "500px" }}>
      <Card className="text-center">
        <CardHeader tag="h3">Sign In Here</CardHeader>
        <CardBody>
          <CardText>
            <Form>
              <FormGroup>
                <Input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                />
              </FormGroup>
              <FormGroup>
                <Input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  required
                />
              </FormGroup>
              <FormGroup>
                <Button color="info">Log In</Button>{" "}
              </FormGroup>
                <Link to="/forgot-password">Forgot/reset password</Link>
            </Form>
          </CardText>
        </CardBody>
        <CardFooter>
          <Link to="/signup">New User? Sign Up here</Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
