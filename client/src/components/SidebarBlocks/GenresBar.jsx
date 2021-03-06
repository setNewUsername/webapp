import React from 'react';
import {useContext} from "react";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import {ListGroup} from "react-bootstrap";

const GenresBar = observer(() => {
    const context = useContext(Context);
    const product = context.product;

    return (
        <ListGroup>
            <b>Жанры:</b>
            {product.genres.map(genre =>
                <ListGroup.Item
                    style={{cursor: "pointer"}}
                    key={genre.id}
                    onClick={() => product.setSelectedGenre(genre)}
                    active={genre.id === product.selectedGenre.id}
                >
                    {genre.name}
                </ListGroup.Item>
            )}
        </ListGroup>
    );
});

export default GenresBar;