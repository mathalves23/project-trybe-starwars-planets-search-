import React from 'react';
import './App.css';
import Background from './images/background.jpg';
import Provider from './context/Provider';
import Table from './components/Table';
import Search from './components/Search';

function App() {
  return (
    <div style={ { backgroundImage: `url(${Background})` } }>
      {/* Source: https://www.freecodecamp.org/news/react-background-image-tutorial-how-to-set-backgroundimage-with-inline-css-style/ */}
      <h1> Star Wars Planets Search </h1>
      <Provider>
        <Search />
        <Table />
      </Provider>
    </div>
  );
}

export default App;
