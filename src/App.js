import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { Route } from 'react-router-dom';

import Main from './pages/Main.js';
import Login from './pages/Login.js';
import Ttv from './pages/Ttv.js';


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
      <Route exact path="/ttv" component={Ttv} />
    </>
  );
}

export default App;
