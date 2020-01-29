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
          <div class="card directory-entry" style="width: 18rem;">
          <img src={employee.image} class="card-img-top" alt="..."/>
          <div class="card-body">
          <h5 class="card-title">{employee.name}</h5>
          <p class="card-text">{employee.from}</p>
         
          <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    </div>


        //   <div class="media col-12 mb-4 directory-entry">
        //   <img className="mr-3 directory-image" src={employee.image} alt="..."/>
        //   <div class="media-body">
        //     <h5 class="mt-0">{employee.name}</h5>
        //    <h6> {employee.from}</h6>
        //     {employee.age}
           
        //   </div>
        // </div>

        )
      })
      }
      </div>
      
      </div>
    );

  }
  
}

export default App;
