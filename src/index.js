import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ReactRedux from './components/reactRedux';
import registerServiceWorker from './registerServiceWorker';
import configurestore from './store/configureStore'
import {Provider} from 'react-redux'
const store = configurestore()

ReactDOM.render(<Provider store={store}><ReactRedux /></Provider>, document.getElementById('root'));
registerServiceWorker();
