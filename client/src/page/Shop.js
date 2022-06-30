import React, {useContext, useEffect} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import Sidebar from "../components/Sidebar";
import ProductList from "../components/ProductList";
import {observer} from "mobx-react-lite";
import {fetchDeveloper, fetchGenre} from "../http/productAPI";
import {Context} from "../index";

const Shop = observer(() => {
    const {product} = useContext(Context);

    useEffect(() => {
        fetchGenre().then(data => product.setGenres(data))
        fetchDeveloper().then(data => product.setdeveloper(data))
    }, [])


    return (
        <Container>
            <Row>
                <Col className='mt-3' md={3}>
                    <Sidebar />
                </Col>
                <Col className='mt-3' md={9}>
                    <ProductList />
                </Col>
            </Row>
        </Container>
    );
});

export default Shop;