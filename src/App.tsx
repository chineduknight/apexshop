import React from 'react'
import { Global } from '@emotion/core';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom'
import __globalCss from 'styles/__global.css';
import store from 'redux/store';
import Pages from 'pages';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Global styles={__globalCss} />
        <Pages />
      </Router>
    </Provider>
  )
}

export default App
