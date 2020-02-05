import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

export default function() {
    return (<div class="styled-spinner">
            <Spinner animation="grow" variant="primary" />
            <Spinner animation="grow" variant="secondary" />
            <Spinner animation="grow" variant="success" />
            </div>
    )
}