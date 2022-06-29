import React, {useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";

const CreateGenre = ({show, onHide}) => {
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
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-danger"} onClick={onHide}>Закрыть</Button>
                <Button variant={'success'} onClick={onHide}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateGenre;