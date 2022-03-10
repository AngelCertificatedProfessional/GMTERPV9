import React from 'react';
import {Card,Button } from 'react-bootstrap';

const Carta = ({observacion,agregarTexto}) => {
    return (
        <Card style={{ width: '18rem' }} className="aside__titulo">
            <Card.Header as="h5">{observacion.titulo}</Card.Header>
            <Card.Body>
                <Card.Text className="with-breaks">
                    {observacion.observacion}
                </Card.Text>
                <Button onClick={() =>agregarTexto(observacion.observacion)}>Agregar</Button>
            </Card.Body>
        </Card>
    )
}

export default Carta;
