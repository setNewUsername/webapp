import React, {useState} from 'react';
import {Button, Modal} from "react-bootstrap";

const [fullscreen, setFullscreen] = useState(true);
// const [show, setShow] = useState(false);

const CreateGenre = (show, onHide) => {
    return (
        <Modal show={show}
               fullscreen={fullscreen}
               onHide={onHide}
        >
            <Modal.Header closeButton>
                <Modal.Title>Добавить новый тип</Modal.Title>
            </Modal.Header>
            <Modal.Body>Modal body content</Modal.Body>
            <Modal.Footer>
                <Button onClick={onHide}></Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateGenre;