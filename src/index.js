import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router
} from 'react-router-dom'

import 'semantic-ui-css/semantic.min.css';

import App from './containers/App/App';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<Router basename={process.env.PUBLIC_URL}><App /></Router>, document.getElementById('root'));
registerServiceWorker();
