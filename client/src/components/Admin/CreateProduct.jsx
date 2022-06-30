import React, {useContext, useState, useEffect} from 'react';
import {Button, Col, Dropdown, Form, InputGroup, Modal, Row} from "react-bootstrap";
import {Context} from "../../index";
import {createProduct, fetchDeveloper, fetchGenre, fetchProduct} from "../../http/productAPI";
import {observer} from "mobx-react-lite";
import {fetchSpec, fetchSpecName} from "../../http/specAPI";
import {login, registration} from "../../http/userAPI";
import {SHOP_ROUTE} from "../../utils/consts";

const CreateProduct = observer(({show, onHide}) => {

    const {product} = useContext(Context);

    useEffect(() => {
        fetchGenre().then(data => product.setGenres(data))
        fetchDeveloper().then(data => product.setDeveloper(data))
        fetchProduct().then(data => product.setGames(data))
        fetchSpecName().then(data => product.setSpecName(data))
    }, [])

    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [price, setPrice] = useState(0);
    const [amount, setAmount] = useState(0);
    const [multiplayer, setMultiplayer] = useState(null);
    const [youtube, setYouTube] = useState('');
    const [spec, setSpec] = useState([]);
    const [specReq, setSpecReq] = useState('');
    const [specMin, setSpecMin] = useState('');
    const [file, setFile] = useState(null);
    const selectFile = e => {
        setFile(e.target.files[0]);
    }
    const changeInfo = (key, value, number) => {
        setSpec(spec.map(i => i.number === number ? {...i, [key]: value} : i))
    }


    const addProduct = () => {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('price', String(price));
        formData.append('amount', String(amount));
        formData.append('amount', youtube);
        formData.append('multiplayer', String(multiplayer));
        formData.append('image', file);
        formData.append('productGenreId', product.selectedGenre.id);
        formData.append('productDeveloperId', product.selectedDeveloper.id);
        formData.append('productPublisherId', product.selectedDeveloper.id);
        createProduct(formData).then(data => onHide);
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
                                <Form.Label>Название</Form.Label>
                                <Form.Control
                                    type='text'
                                    placeholder='Название'
                                    value={name}
                                    onChange={e => setName(e.target.value)}
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
                                    value={desc}
                                    onChange={e => setDesc(e.target.value)}
                                />
                            </div>


                        </Col>
                        <Col md={4}>
                            <div className='mb-4'>
                                <Form.Label>Цена товара</Form.Label>
                                <Form.Control
                                    type='number'
                                    placeholder='Цена'
                                    value={price}
                                    onChange={e => setPrice(Number(e.target.value))}
                                />
                            </div>
                            <div className='mb-4'>
                                <Form.Label>Количество товара</Form.Label>
                                <Form.Control
                                    type='number'
                                    placeholder='Количество'
                                    value={amount}
                                    onChange={e => setAmount(Number(e.target.value))}
                                />
                            </div>
                            <div className='mb-4'>
                                <Form.Check
                                    type="switch"
                                    id="custom-switch"
                                    label="multiplayer"
                                    onChange={setMultiplayer}
                                    value={multiplayer}
                                />
                            </div>
                            <div className='mb-4'>
                                <Form.Group controlId="formFile" className="mb-3">
                                    <Form.Label>Изображение игры</Form.Label>
                                    <Form.Control
                                        type="file"
                                        onChange={selectFile}/>
                                </Form.Group>
                            </div>
                            <div className='mb-4'>
                                <Form.Select multiple aria-label="Default select example">
                                    <option>Выберите язык</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                            </div>
                            <div className='mb-4'>
                                <Dropdown>
                                    <Dropdown.Toggle>{product.selectedGenre.name || 'Выберите жанр'}</Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        {product.genres.map(genre =>
                                            <Dropdown.Item
                                                key={genre.id}
                                                onClick={() => {
                                                    product.setSelectedGenre(genre)
                                                }}
                                            >{genre.name}</Dropdown.Item>
                                        )}
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <div className='mb-4'>
                                <Dropdown>
                                    <Dropdown.Toggle>{product.selectedDeveloper.name || 'Выберите разработчика'}</Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        {product.developer.map(dev =>
                                            <Dropdown.Item
                                                key={dev.id}
                                                onClick={() => {
                                                    product.setSelectedDeveloper(dev)
                                                }}
                                            >{dev.name}</Dropdown.Item>
                                        )}
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </Col>
                    </Row>


                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-danger"} onClick={onHide}>Закрыть</Button>
                <Button variant={'success'} onClick={addProduct}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    )
        ;
});


const SpecForm = ({id, name, specMin, specReq, setSpecMin, setSpecReq}) => {
    return <>
        <InputGroup key={id} className="mb-3" aria-colcount={3}>
            <InputGroup.Text>{name}</InputGroup.Text>
            <Form.Control value={specMin} onChange={e => setSpecMin(e.target.value)}
                          placeholder="Минимальные"/>
            <Form.Control value={specReq} onChange={e => setSpecReq(e.target.value)}
                          placeholder="Рекомендованные"/>
        </InputGroup>
    </>
}
export default CreateProduct;