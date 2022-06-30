import React, {useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {createDeveloper, createGenre} from "../../http/productAPI";

const CreateDeveloper = ({show, onHide}) => {

    const [value, setValue] = useState('')

    const addGenre = () => {
        console.log('add')
        createDeveloper({name: value}).then(data => {
            setValue('');
            onHide();
        })
    }

    return (
        <Modal show={show}
               fullscreen={false}
               onHide={onHide}
        >
            <Modal.Header closeButton>
                <Modal.Title>Добавить нового издателя/разработчика</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Добавление разработчика
                <Form>
                    <Form.Control
                        placeholder={"Введите имя издателя/разработчика"}
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-danger"} onClick={onHide}>Закрыть</Button>
                <Button variant={'success'} onClick={addGenre}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateDeveloper;