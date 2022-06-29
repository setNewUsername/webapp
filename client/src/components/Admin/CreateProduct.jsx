import React, {useContext, useState} from 'react';
import {Button, Col, Dropdown, Form, InputGroup, Modal, Row} from "react-bootstrap";
import {Context} from "../../index";

const CreateProduct = ({show, onHide}) => {

    const {product} = useContext(Context);
    const [info, setInfo] = useState([]);
    const addInfo = () => {
        setInfo([...info, {title: '', min: '', req: '', number: Date.now()}])
    }
    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }

    return (
        <Modal show={show}
               fullscreen={true}
               onHide={onHide}
        >
            <Modal.Header closeButton>
                <Modal.Title>Добавить товар</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Row>
                        <Col md={8}>
                            <div className='mb-4'>
                                <Form.Control
                                    type='text'
                                    placeholder='Название'
                                />
                                <Form.Text className="text-muted">
                                    Введите название добавляемого товара
                                </Form.Text>
                            </div>
                            <div className='mb-4'>
                                <Form.Label>Описание товара</Form.Label>
                                <Form.Control
                                    as='textarea'
                                    placeholder='Описание'
                                />
                            </div>

                            <div className='d-flex justify-content-between mb-3'>
                                <Form.Label>Технические характеристики </Form.Label>
                                <Button
                                    variant={"outline-secondary"}
                                    onClick={addInfo}>
                                    Добавить
                                </Button>
                            </div>

                            {info.map(i =>
                                <Row key={i.number} className='mb-3'>
                                    <Col md={4}>
                                        <Form.Control
                                            placeholder={"Введите название характеристики"}
                                        />
                                    </Col>
                                    <Col md={3}>
                                        <Form.Control
                                            placeholder={"Минимальные требования"}
                                        />
                                    </Col>
                                    <Col md={3}>
                                        <Form.Control
                                            placeholder={"Рекомендуемые требования"}
                                        />
                                    </Col>
                                    <Col md={2}>
                                        <Button variant='outline-danger'
                                                onClick={() => removeInfo(i.number)}>Удалить</Button>
                                    </Col>
                                </Row>
                            )}

                        </Col>
                        <Col md={4}>
                            <div className='mb-4'>
                                <Dropdown>
                                    <Dropdown.Toggle>Выберите жанр</Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        {product.genres.map(genre =>
                                            <Dropdown.Item key={genre.id}>{genre.name}</Dropdown.Item>
                                        )}
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <div className='mb-4'>
                                <Form.Select multiple aria-label="Default select example">
                                    <option>Выберите языки</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                            </div>
                        </Col>
                    </Row>


                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-danger"} onClick={onHide}>Закрыть</Button>
                <Button variant={'success'} onClick={onHide}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    )
        ;
};

export default CreateProduct;