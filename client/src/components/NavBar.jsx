import React, {useContext} from 'react';
import {Context} from "../index";
import {Container, Nav, Navbar} from "react-bootstrap";
import {ADMIN_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";

const NavBar = observer(() => {
    const {user} = useContext(Context)
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href={SHOP_ROUTE}>
                    <img
                        alt=""
                        src="https://react-bootstrap.netlify.app/logo.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    Games Store
                </Navbar.Brand>
                    {user.isAuth
                        ? <Nav className="ml-auto">
                            <Nav.Link href={SHOP_ROUTE}>Магазин</Nav.Link>
                            <Nav.Link href={ADMIN_ROUTE}>Админ панель</Nav.Link>
                            <Nav.Link onClick={() => user.setIsAuth(false)}>Выйти</Nav.Link>
                        </Nav>
                        : <Nav className="ml-auto">
                            <Nav.Link href={SHOP_ROUTE}>Магазин</Nav.Link>
                            <Nav.Link onClick={() => user.setIsAuth(true)}>Авторизация</Nav.Link>
                        </Nav>
                    }
            </Container>
        </Navbar>
    );
});

export default NavBar;