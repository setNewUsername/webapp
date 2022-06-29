import React from 'react';
import {Button, Card, Col} from "react-bootstrap";
import style from './ProductItem.module.css';
import { useNavigate } from "react-router-dom";
import {PRODUCT_ROUTE} from "../utils/consts";

const ProductItem = ({product}) => {

    const navigate = useNavigate();
    return (
        <Col md={3} sm={6} className="mb-4">
            <Card style={{ cursor: 'pointer', margin: 2 }} onClick={() =>  navigate(PRODUCT_ROUTE + '/' + product.id, { replace: true })}>
                <Card.Img className={style.image} variant="top" src={product.img} />
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>
                        {product.description}
                    </Card.Text>
                    <Card.Text>
                        <span className={style.price}>{product.price} руб</span>
                    </Card.Text>
                    <Button variant="primary">Купить</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ProductItem;