import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import fetchAPI from '../services/fetch';
import MyContext from './index';

function Provider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [filter, setFilter] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [] });
  // Lógica realizada com ajuda da mentoria de revisão do Rod do dia 24/02.

  async function returnPlanets() {
    const planet = await fetchAPI();
    setPlanets(planet);
  }

  useEffect(() => {
    returnPlanets();
  }, []);

  function searchName({ target }) {
    setFilter((prevFilter) => (
      { ...prevFilter, filterByName: { name: target.value } }));
  }

  return (
    <MyContext.Provider value={ { planets, searchName, filter, setFilter } }>
      {children}
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
}.isRequired;

export default Provider;
