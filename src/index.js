import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import App from './components/App.js';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();