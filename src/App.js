import React from 'react';
import './App.css';
import './style.css';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducers from './redux/reducers';

import Dashboard from './component/dashboard';


const store = createStore(
  reducers
);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
          <Dashboard />
      </div>
    </Provider>
  );
}

export default App;
