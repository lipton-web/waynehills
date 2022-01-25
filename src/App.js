import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { Route } from 'react-router-dom';

import Main from './Main';
import Login from './Login';


const GlobalStyle = createGlobalStyle`
  * {
    text-decoration: none;
    padding: 0;
    margin: 0;
    box-sizing: border-box;

    ::-webkit-scrollbar{
			display: none;
		}
  }

  .clickable {
    cursor: pointer!important;
  }
`

function App() {
  return (
    <>
      <GlobalStyle/>
      <Route exact path="/" component={Main} />
      <Route exact path="/login" component={Login} />
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
