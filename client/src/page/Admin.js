import React, {useContext, useState} from 'react';
import {Button, Container} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import CreateGenre from "../components/Admin/CreateGenre";
import CreateProduct from "../components/Admin/CreateProduct";
import CreateDeveloper from "../components/Admin/CreateDeveloper";

const Admin = observer(() => {


    const [genreVisible, setGenreVisible] = useState(false);
    const [developerVisible, setDeveloperVisible] = useState(false);
    const [productVisible, setProductVisible] = useState(false);

    return (
        <Container className='d-flex flex-column pt-5'>
            <Button
                variant='primary'
                className='mb-3'
                onClick={() => setGenreVisible(true)}>
                Добавить жанр
            </Button>
            <Button
                variant='primary'
                className='mb-3'
                onClick={() => setDeveloperVisible(true)}>
                Добавить издателя
            </Button>
            <Button
                variant='primary'
                className='mb-3'
                onClick={() => setProductVisible(true)}>
                Добавить товар
            </Button>
            <CreateGenre show={genreVisible} onHide={() => setGenreVisible(false)}/>
            <CreateDeveloper show={developerVisible} onHide={() => setDeveloperVisible(false)}/>
            <CreateProduct show={productVisible} onHide={() => setProductVisible(false)}/>
        </Container>
    );
});

export default Admin;