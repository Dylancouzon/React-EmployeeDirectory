import React from 'react';

import {InputGroup, FormControl, Col} from 'react-bootstrap/';



const FilterInput = () => (
    <Col xs lg="5">
        <InputGroup className="mb-3" xs lg="2">
            <InputGroup.Prepend>
                <InputGroup.Text>Employee Name:</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl />
        </InputGroup>
    </Col>
);

export default FilterInput;
