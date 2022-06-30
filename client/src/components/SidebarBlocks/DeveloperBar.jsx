import React from 'react';
import {useContext} from "react";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import {ListGroup} from "react-bootstrap";

const developerBar = observer(() => {

    const {product} = useContext(Context);

    return (
        <ListGroup>
            <b>Бренды:</b>
            {product.developer.map(brand =>
                <ListGroup.Item
                    style={{cursor: "pointer"}}
                    key={brand.id}
                    onClick={() => {
                        product.setSelectedDeveloper(brand);
                    }}
                    active={brand.id === product.selectedDeveloper.id}
                >
                    {brand.name}
                </ListGroup.Item>
            )}
        </ListGroup>
    );
});

export default developerBar;