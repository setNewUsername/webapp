import React from 'react';
import {useContext} from "react";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import {ListGroup} from "react-bootstrap";

const BrandsBar = observer(() => {
    const context = useContext(Context);
    const product = context.product;

    return (
        <ListGroup>
            <b>Бренды:</b>
            {product.brands.map(brand =>
                <ListGroup.Item
                    style={{cursor: "pointer"}}
                    key={brand.id}
                    onClick={() => {
                        product.setSelectedBrand(brand);
                    }}
                    active={brand.id === product.selectedBrand.id}
                >
                    {brand.name}
                </ListGroup.Item>
            )}
        </ListGroup>
    );
});

export default BrandsBar;