import React, { component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends component {
  constructor(props) {
    super(props)

    this.state = {
      cocktail: [],
    }
  }
  render() {
    return (
      <>
    <div className = 'mian-container'>
      <form>
        <div className = 'search-container'>
          <input type = 'search' className = 'search-field' />
            <br />
             <button className = 'submit-btn'> Search cocktails. . . </button>

          </div>
      </form>



    </div>

      </>
    )
  }
}


export default App;
// mod stuff in this file
// this is how you make app