import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './styling/main.css';

const rootElement = document.getElementById('root')

ReactDOM.render(<App />, rootElement);

// Hot Module Reload (does not preserve component state)
if (module.hot) {
    module.hot.accept('./components/App', () => {
      ReactDOM.render(<App />, rootElement)
    })
}

registerServiceWorker();
