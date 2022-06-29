import React from 'react';
import {useContext} from "react";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import {ListGroup} from "react-bootstrap";

const GenresBar = observer(() => {
    const context = useContext(Context);

    return (
        <ListGroup>
            {context.product.genres.map(genre =>
                <ListGroup.Item key={genre.id}>{genre.name}</ListGroup.Item>
            )}
        </ListGroup>
    );
});

export default GenresBar;