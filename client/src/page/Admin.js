import React from 'react';
import {Button, Container} from "react-bootstrap";
import {observer} from "mobx-react-lite";

const Admin = observer(() => {
    return (
        <Container className='d-flex flex-column pt-5'>
            <Button variant='primary' className='mb-3'>Добавить товар</Button>
            <Button variant='primary' className='mb-3'>Добавить товар</Button>
            <Button variant='primary' className='mb-3'>Добавить товар</Button>
        </Container>
    );
});

export default Admin;