import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './store';
import { OlContextProvider } from './components/common/OlContextProvider';
import { Provider } from 'react-redux'

ReactDOM.render(
  <React.StrictMode>
    <OlContextProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </OlContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
