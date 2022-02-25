import React from 'react';
import './App.css';
import Provider from './context/Provider';
import Table from './components/Table';

function App() {
  return (
    <div>
      <h1> Star Wars Planets</h1>
      <Provider>
        <Table />
      </Provider>
    </div>
  );
}

export default App;
