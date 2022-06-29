import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import Sidebar from "../components/Sidebar";
import ProductList from "../components/ProductList";

const Shop = () => {
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
};

export default Shop;