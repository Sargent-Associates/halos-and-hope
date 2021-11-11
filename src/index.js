import React from 'react';
import ReactDOM from 'react-dom';
import routes from './routes';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(<Router>{routes}</Router>, document.getElementById('root'));
