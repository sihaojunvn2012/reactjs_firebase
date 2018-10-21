import React from 'react';
import ReactDOM from 'react-dom';
import './components/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider} from 'react-redux';
import store1 from './components/Store';

ReactDOM.render(
    <Provider store={store1}>
        <App/>    
    </Provider>  
, document.getElementById('root'));
registerServiceWorker();
  