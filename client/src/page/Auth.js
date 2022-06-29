import React from 'react';
import {Button, Card, Container, Form} from "react-bootstrap";
import {NavLink, useLocation} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";

const Auth = () => {

    const location = useLocation();
    const isLogin = location.pathname === LOGIN_ROUTE;


    return (
        <Container className='d-flex justify-content-center align-items-center'
                   style={{height: window.innerHeight}}
        >
            <Card style={{width: 600, padding: 20}}>
                <h2 className='m-auto'>{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
                <Form className='d-flex flex-column'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email адрес</Form.Label>
                        <Form.Control type="email" placeholder="Введите email"/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Пароль</Form.Label>
                        <Form.Control type="password" placeholder="Введите пароль"/>
                    </Form.Group>

                    <Form.Group className="mb-3 d-flex justify-content-between align-items-center">
                        {isLogin ?
                            <Form.Text>Нет аккаунта? <NavLink
                                to={REGISTRATION_ROUTE}>Зарегистрируйтесь!</NavLink></Form.Text>
                            : <Form.Text>Есть аккаунт? <NavLink
                                to={LOGIN_ROUTE}>Войдите!</NavLink></Form.Text>
                        }
                        <Button className='align-self-end' variant="primary" type="submit">
                            {isLogin ? "Войти" : "Регистрация"}
                        </Button>
                    </Form.Group>
                </Form>
            </Card>
        </Container>
    );
};

export default Auth;