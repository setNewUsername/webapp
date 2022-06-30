import React, {useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {createGenre} from "../../http/productAPI";

const CreateGenre = ({show, onHide}) => {

    const [value, setValue] = useState('')

    const addGenre = () => {
        console.log('add')
        createGenre({name: value}).then(data => {
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
                <Modal.Title>Добавить новый тип</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Добавление бренда
                <Form>
                    <Form.Control
                        placeholder={"Введите название типа"}
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

export default CreateGenre;