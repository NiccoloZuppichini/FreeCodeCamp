import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import AnalogClock, { Themes } from 'react-analog-clock';


class App extends Component {

  constructor(){
    super()
    this.state = {
      work_min: 45,
      relax_min: 15
    }
  }


  render() {
    return (
      <div className="App">
      <header>
      <h1 className="Title">Pomodoro clock</h1>
      </header>

      <div className="pomodoroDiv">
      <h3> Work time </h3>
      <Button bsStyle="primary" bsSize="large"> +5 </Button>
      <Button bsStyle="primary" bsSize="large"> -5 </Button>
      <Button bsStyle="primary" bsSize="large"> Reset</Button>

      <h3> Relax time </h3>
      <Button bsStyle="primary" bsSize="large"> +5 </Button>
      <Button bsStyle="primary" bsSize="large"> -5 </Button>
      <Button bsStyle="primary" bsSize="large"> Reset</Button>

      <div className = "pomodoroTimer">
      clock
      </div>

      <Button bsStyle="primary" bsSize="large"> Start</Button>
      <div class="clock"> {this.state.work_min} and {this.state.relax_min} </div>
      </div>

      </div>
    );
  }
}

export default App;
