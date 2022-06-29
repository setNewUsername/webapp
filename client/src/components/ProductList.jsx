import React, {useContext} from 'react';
import {Context} from "../index";
import {Row} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import ProductItem from "./ProductItem";

const ProductList = observer(() => {
    //const {product} = useContext(Context);
    const context = useContext(Context);
    const product = context.product;
    return (
        <div>
            Магазин
            <Row className='d-flex'>
                {product.games.map(game => (
                        <ProductItem key={game.id} product={game}/>
                    ))
                }
            </Row>
        </div>

    );
});

export default ProductList;