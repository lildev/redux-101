import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css'
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import App from './components/App';

const store = createStore(reducers)
ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
 document.getElementById('root'));
