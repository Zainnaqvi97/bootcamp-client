import React from 'react';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state= {
      employees: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3005/getSogetiEmployees')
    .then(employees => employees.json())
    .then(_employees => {
      console.log(_employees)
      this.setState({
        employees: _employees
      })
    })
    .catch(err => console.log(err))
  }

  render(){
    return (
      <div className="App container">
      <h1>Sogeti Employee Directory</h1>
      <div className="row">
      { this.state.employees.map((employee, index) => {
        return (
          <div class="media col-12 mb-4 directory-entry" style="width: 18rem;">
          <img className="mr-3 directory-image" src={employee.image} alt="..."/>
          <div class="media-body">
            <h5 class="mt-0">{employee.name}</h5>
           <h6> {employee.from}</h6>
            {employee.age}
           
          </div>
        </div>

        )
      })
      }
      </div>
      
      </div>
    );

  }
  
}

export default App;
