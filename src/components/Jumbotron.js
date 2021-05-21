import React from 'react';

import Container from 'react-bootstrap/Container';
import BSJumbotron from 'react-bootstrap/Jumbotron';


const Jumbotron = () => (
  <Container className="p-3">
    <BSJumbotron>
      <h1 className="header">Employee directory</h1>
    </BSJumbotron>
  </Container>
);

export default Jumbotron;
