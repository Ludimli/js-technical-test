import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/index.css';
import data from './data.js'

let props = {
	initialState: data,
};

ReactDOM.render(
  <App {...props } />,
  document.getElementById('root')
);
