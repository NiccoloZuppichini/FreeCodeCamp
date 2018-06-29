import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import FormGroup from 'react-bootstrap/lib/FormGroup'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import FormControl from 'react-bootstrap/lib/FormControl'

let marked = require('marked')

class App extends Component {

state = {
  markdown: ""
}

markdown_onChange = function(markdown){
  this.setState({markdown})

}

  render() {

    return (
      <div className="App container">

      <div className="col">
         <FormGroup>
         <ControlLabel>
         Markdown input :)
         </ControlLabel>
         <FormControl componentClass='textarea' type="text" placeholder="Enter markdown text here" value = {this.state.markdown} onChange = {(e)=>{this.markdown_onChange(e.target.value)}}>
         </FormControl>
         </FormGroup>
         </div>

        <div className='col'>
         <h3>
         Output here :)
         </h3>
         <div dangerouslySetInnerHTML = {{ __html: marked(this.state.markdown)}} >
         </div>
         </div>
      </div>
    );
  }
}

export default App;
