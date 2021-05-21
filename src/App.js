import React, { Component } from "react";

import Jumbotron from './components/Jumbotron';
import FilterInput from './components/FilterInput';
import Container from 'react-bootstrap/Container';
import BootstrapTable from 'react-bootstrap-table-next';
import API from "./utils/API";

const columns = [
  {
    dataField: 'picture',
    text: 'Picture',
    formatter: pictureFormatter
  },
  {
    dataField: 'name',
    text: 'Name'
  }, {
    dataField: 'age',
    text: 'Age'
  }, {
    dataField: 'email',
    text: 'Email'
  },
];

function pictureFormatter(res) {
    return <img src={res[0]} alt={res[1]} />;
  }
class App extends Component {
  state = {
    results: [],
    filter: ""
  };

  componentDidMount() {
    this.searchEmployee();
  }

  searchEmployee = () => {
    API.search()
      .then(res => {
        const newData = [];
        console.log(res.data);
        res.data.results.forEach((data)=>{
          newData.push({
            picture: [data.picture.medium, data.name.first],
            name: data.name.first + " " + data.name.last,
            age: data.dob.age,
            email: data.email
          });
        });
        console.log(newData);
        this.setState({ results: newData })
      })
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const value = event.target.value;
    this.setState({
      filter: value
    });
  };

  render() {
    console.log(this.state.results);
    return (
      <Container className="p-3" >
        <Jumbotron />
        <FilterInput
          value={this.state.filter}
          handleInputChange={this.handleInputChange}
        />
        <BootstrapTable keyField='id' data={this.state.results} columns={columns} bordered={false} />
      </Container>
    );
  }
}
export default App;
