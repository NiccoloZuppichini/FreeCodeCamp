import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import AnalogClock, { Themes } from 'react-analog-clock';

const initialState = {
  work_min: 45,
  relax_min: 15,
  running: false
}

class App extends Component {

  constructor(){
    super()
    this.state = initialState
  }

  add_work(amount){
    let previous = this.state.work_min
    this.setState(previousState=>{
        console.log(this.state)

      return{ work_min : previous + amount}
    })
  }

  sub_work(amount){
    let previous = this.state.work_min
    this.setState(previousState=>{
        console.log(this.state)

      return{ work_min : previous - amount}
    })
  }

  add_relax(amount){
    let previous = this.state.relax_min
    this.setState(previousState=>{
        console.log(this.state)

      return{ relax_min : previous + amount}
    })
  }

  sub_relax(amount){
    let previous = this.state.relax_min
    this.setState(previousState=>{
        console.log(this.state)

      return{ relax_min : previous - amount}
    })
  }

  reset_state(){
    this.setState(initialState)
  }

  render() {
    return (
      <div className="App">
      <header>
      <h1 className="Title">Pomodoro clock</h1>
      </header>

      <div className="pomodoroDiv">
      <h3> Work time </h3>
      <Button bsStyle="primary" bsSize="large" onClick={()=>{this.add_work(5)}} disabled = {this.state.running}> +5 </Button>
      <Button bsStyle="primary" bsSize="large" onClick={()=>{this.sub_work(5)}} disabled = {this.state.running}> -5 </Button>

      <h3> Relax time </h3>
      <Button bsStyle="primary" bsSize="large" onClick={()=>{this.add_relax(5)}} disabled = {this.state.running}> +5 </Button>
      <Button bsStyle="primary" bsSize="large" onClick={()=>{this.sub_relax(5)}} disabled = {this.state.running}> -5 </Button>

      <div></div>
      <Button bsStyle="primary" bsSize="large" onClick={()=>{this.reset_state()}}> Reset</Button>

      <div className = "pomodoroTimer">
      {this.state.work_min} and {this.state.relax_min}
      
      </div>

      <Button bsStyle="primary" bsSize="large"> Start</Button>
      </div>

      </div>
    );
  }
}

export default App;
