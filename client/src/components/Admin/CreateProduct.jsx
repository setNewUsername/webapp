import React, {useContext} from 'react';
import {Button, Dropdown, Form, InputGroup, Modal} from "react-bootstrap";
import {Context} from "../../index";

const CreateProduct = ({show, onHide}) => {

    const {product} = useContext(Context);

    return (
        <Modal show={show}
               fullscreen={true}
               onHide={onHide}
        >
            <Modal.Header closeButton>
                <Modal.Title>Добавить новый тип</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Добавление бренда
                <Form>

                   <Dropdown>
                       <Dropdown.Toggle>Выберите жанр</Dropdown.Toggle>
                       <Dropdown.Menu>
                           {product.genres.map( genre =>
                               <Dropdown.Item key={genre.id}>{genre.name}</Dropdown.Item>
                           )}
                       </Dropdown.Menu>
                   </Dropdown>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-danger"} onClick={onHide}>Закрыть</Button>
                <Button variant={'success'} onClick={onHide}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateProduct;