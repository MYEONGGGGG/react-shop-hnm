import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const Login = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const loginUser = (event) => {
        event.preventDefault();
        dispatch({ type: "LOGIN", payload: {id: 'id@mail.com', pwd: '1234', auth: true} });
        navigate('/');
    };

    return (
        <Container>
            <Form onSubmit={ loginUser }>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email"></Form.Control>
                    <Form.Text>
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out"/>
                </Form.Group>

                <Button className="btn-primary" type="submit">
                    Login
                </Button>
            </Form>
        </Container>
    );
}

export default Login;