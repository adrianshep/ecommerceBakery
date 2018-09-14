import React, { Component } from 'react';
import logo from './logo.svg';
import BakeryNav from './Nav/Nav.jsx';
import Landing from './Landing/Landing.jsx';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'home'
    }
  }

  componentDidMount() {
    console.log('Did mount:  hey');
  }

  componentWillMount() {
    console.log('Will mount:  hey');
  }

  handleSelect = (key) => {
    this.setState({
      view: key
    })
  }

  render() {
    return (
      <div className="App">
        <BakeryNav selectProp={this.handleSelect}/>
        {this.state.view === 'home' &&
          <Landing />
        }
        {this.state.view === 'shop' &&
          <h1>Mock Shop</h1>
        }
        {this.state.view === 'contact' &&
          <h1>Mock Contact Page</h1>
        }
      </div>
    );
  }
}

export default App;
