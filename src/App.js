import React, { Component } from "react";

import Jumbotron from './components/Jumbotron';
import FilterInput from './components/FilterInput';
import Container from 'react-bootstrap/Container';
import BootstrapTable from 'react-bootstrap-table-next';
import API from "./utils/API";

//Table colums
const columns = [
  {
    dataField: 'picture',
    text: 'Picture',
    formatter: pictureFormatter
  },
  {
    dataField: 'name',
    text: 'Name',
    sort: true
  }, {
    dataField: 'age',
    text: 'Age',
    sort: true
  }, {
    dataField: 'email',
    text: 'Email',
    sort: true
  },
];

//Picture Formatting for the table
function pictureFormatter(res) {
    return <img src={res[0]} alt={res[1]} />;
  }

class App extends Component {
  state = {
    results: [],
    filtered: []
  };

    // Execute searchEmployee when loading the page
  componentDidMount() {
    this.searchEmployee();
  }

  // Get results from the Google API and then push the needed data into a new Array
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
        this.setState({ results: newData })
        this.setState({ filtered: newData })
      })
      .catch(err => console.log(err));
  };

 // Filter the results
  handleInputChange = event => {
    const filter = event.target.value;
    let filtered = this.state.results.filter((employee) => employee.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1);
    this.setState({
      filtered: filtered
    });
  };

  //Render the page
  render() {
    return (
      <Container className="p-3" >
        <Jumbotron />
        <FilterInput
          value={this.state.filter}
          handleInputChange={this.handleInputChange}
        />
        <BootstrapTable keyField='id' data={this.state.filtered} columns={columns} bordered={false} />
      </Container>
    );
  }
}
export default App;
