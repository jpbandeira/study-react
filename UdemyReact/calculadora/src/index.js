import React from 'react';
import ReactDOM from 'react-dom';
import Calculator from './components/Calculator';
import './Index.css'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Calculator/>, document.getElementById('root'));

serviceWorker.unregister();
