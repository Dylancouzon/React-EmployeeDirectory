import React from 'react';

import Jumbotron from './components/Jumbotron';
import FilterInput from './components/FilterInput';
import Container from 'react-bootstrap/Container';
import BootstrapTable from 'react-bootstrap-table-next';

const products = [{
  id: 1,
  name: "Test",
  price: "$30"
}];
const columns = [{
  dataField: 'id',
  text: 'Product ID'
}, {
  dataField: 'name',
  text: 'Product Name'
}, {
  dataField: 'price',
  text: 'Product Price'
}];


const App = () => (
  <Container className="p-3">
    <Jumbotron />
    <FilterInput />
    <BootstrapTable keyField='id' data={ products }  columns={ columns } bordered={ false }/>
    </Container>
);

export default App;
