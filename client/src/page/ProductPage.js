import React from 'react';
import {Button, Card, Col, Container, Image, Row, Tab, Table, Tabs} from "react-bootstrap";
import {useLocation, useParams} from "react-router-dom";
import {useContext, useEffect} from "react";
import {fetchDeveloper, fetchGenre, fetchProduct, fetchProductOne} from "../http/productAPI";

const ProductPage = () => {
    let {id} = useParams();

    useEffect(() => {
        fetchProductOne(id).then(data => product.setOneGames(data))
    }, []);



    //FIXME: Рефактор, выделить сист требования в отдельную компоненту
    const product = {
        id: 1,
        name: 'Mortal Kombat XL',
        description: 'Торопитесь принять участие в самых кровавых битвах между самыми необычными бойцами! В состав известной всем игры включены как классические бойцы, так и новые, такие как Кейси Кейдж, Д’Вора, Ферра и Котал Кан. По сравнению с предыдущими играми серии Mortal Kombat X обладает большим разнообразием.  В игру для каждого персонажа введены целых три боевых стиля, которые повлияют на эффективность и эстетику ведения боя. Не испугайтесь купить Mortal Kombat X прямо сейчас, выберите своего персонажа и вступите в жестокий бой!\n' +
            '\n' +
            'Бросьте вызов врагу! Смертельный вызов!',
        img: `https://www.gamebuy.ru/sites/default/files/imagecache/game_cover/files/mortal-kombat-11-ultimate-ps4_playstation-4_cover.jpg`,
        price: 2000,
        youtube: '5qap5aO4i9A',
        systemCharacteristics: [
            {id: 1, title: 'Видеокарта', min: 'AMD rx770', req: 'Ffdffd'},
            {id: 2, title: 'Оперативная память', min: '8 Gb', req: 'fdfsdf'},
            {id: 3, title: 'Процессор', min: 'Intel i7', req: '423423'},
        ],
    }


    return (
        <Container>
            <Row className='mt-5'>
                <Col md={6} className='d-flex justify-content-center'>
                    <Image src={product.img}/>
                </Col>
                <Col md={6} className='d-flex align-items-center justify-content-around'>
                    <Card>
                        <Card.Body>
                            <Card.Title><h1>{product.name}</h1></Card.Title>
                            <Card.Text>{product.description}</Card.Text>
                            <div className='d-flex justify-content-between'>
                                <div>
                                    <Card.Text as='b'>Цена: </Card.Text>
                                    <Card.Text as='span'>{product.price} руб</Card.Text>
                                </div>

                                <Button variant="primary" onClick={() => alert('Купили')}>Купить</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className='mt-5'>
                <Tabs
                    defaultActiveKey="description"
                    id="uncontrolled-tab-example"
                    className="mb-3"
                >
                    <Tab eventKey="description" title="Описание">
                        <Row>
                            <Col md={6}>
                                {product.description}
                            </Col>
                            <Col md={6}>
                                <iframe width="560" height="315"
                                        src={"https://www.youtube.com/embed/" + product.youtube}
                                        title="YouTube video player" frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen></iframe>
                            </Col>
                        </Row>
                    </Tab>
                    <Tab eventKey="spec" title="Системные требования">
                        <div>
                            <h4>Минимальные системные требования</h4>
                            <Table striped bordered hover>
                                <tbody>
                                {product.systemCharacteristics.map(info =>
                                    <tr key={info.id}>
                                        <td>{info.title}</td>
                                        <td>{info.min}</td>
                                    </tr>
                                )}
                                </tbody>
                            </Table>
                            <h4>Рекомендованные системные требования</h4>
                            <Table striped bordered hover>
                                <tbody>
                                {product.systemCharacteristics.map(info =>
                                    <tr key={info.id}>
                                        <td>{info.title}</td>
                                        <td>{info.req}</td>
                                    </tr>
                                )}
                                </tbody>
                            </Table>

                        </div>
                    </Tab>
                </Tabs>
            </Row>
        </Container>
    );
};

export default ProductPage;