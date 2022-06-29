import React, {useContext} from 'react';
import {Context} from "../index";
import {Container, Nav, Navbar} from "react-bootstrap";
import {ADMIN_ROUTE, LOGIN_ROUTE, PRODUCT_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";
import {NavLink, useNavigate} from "react-router-dom";
import style from './NavBar.module.css';


const NavBar = observer(() => {
    const {user} = useContext(Context)

    const navigate = useNavigate();
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink to={SHOP_ROUTE} className={style.logo}>
                    <Navbar.Brand>
                        <img
                            alt=""
                            src="https://react-bootstrap.netlify.app/logo.svg"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        Games Store
                    </Navbar.Brand>
                </NavLink>
                {user.isAuth
                    ? <Nav className="ml-auto">
                        <Nav.Link
                            onClick={() => navigate(SHOP_ROUTE, {replace: true})}
                            active={false}>
                            Магазин
                        </Nav.Link>
                        <Nav.Link
                            onClick={() => navigate(ADMIN_ROUTE, {replace: true})}
                            active={false}>
                            Админ панель
                        </Nav.Link>
                        <Nav.Link
                            onClick={() => navigate(LOGIN_ROUTE, {replace: true})}
                            active={false}>
                            Выйти
                        </Nav.Link>
                        <Nav.Link onClick={() => user.setIsAuth(false)}>Выйти*</Nav.Link>
                    </Nav>
                    : <Nav className="ml-auto">
                        <Nav.Link
                            onClick={() => navigate(SHOP_ROUTE, {replace: true})}
                            active={false}>
                            Магазин
                        </Nav.Link>
                        <Nav.Link
                            onClick={() => navigate(LOGIN_ROUTE, {replace: true})}
                            active={false}>
                            Авторизация
                        </Nav.Link>
                        <Nav.Link onClick={() => user.setIsAuth(true)}>Авторизация*</Nav.Link>
                    </Nav>
                }
            </Container>
        </Navbar>
    );
});

export default NavBar;