import React, {useContext, useState} from 'react';
import {Button, Card, Container, Form} from "react-bootstrap";
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {login, registration} from "../http/userAPI";
import {Context} from "../index";

const Auth = () => {

    const {user} = useContext(Context);
    const location = useLocation();
    const navigate = useNavigate();
    const isLogin = location.pathname === LOGIN_ROUTE;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login(email, password);
            } else {
                data = await registration(email, password);
            }
            user.setUser(user);
            user.setIsAuth(true);
            navigate(SHOP_ROUTE, {replace: true});
        } catch (e) {
            alert(e.response.data.message);
        }


    }

    return (
        <Container className='d-flex justify-content-center align-items-center'
                   style={{height: window.innerHeight}}
        >
            <Card style={{width: 600, padding: 20}}>
                <h2 className='m-auto'>{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
                <Form className='d-flex flex-column'
                      onSubmit={(e) => {
                          e.preventDefault();
                          console.log('onSubmit');
                          onSubmit();
                      }}
                >
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email адрес</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Введите email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Пароль</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Введите пароль"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3 d-flex justify-content-between align-items-center">
                        {isLogin ?
                            <Form.Text>Нет аккаунта? <NavLink
                                to={REGISTRATION_ROUTE}>Зарегистрируйтесь!</NavLink></Form.Text>
                            : <Form.Text>Есть аккаунт? <NavLink
                                to={LOGIN_ROUTE}>Войдите!</NavLink></Form.Text>
                        }
                        <Button className='align-self-end'
                                variant="primary"
                                type="submit"
                        >
                            {isLogin ? "Войти" : "Регистрация"}
                        </Button>
                    </Form.Group>
                </Form>
            </Card>
        </Container>
    );
};

export default Auth;