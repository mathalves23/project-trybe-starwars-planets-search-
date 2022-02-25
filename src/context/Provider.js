import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import fetchAPI from '../services/fetch';
import MyContext from './index';

function Provider({ children }) {
  const [planets, setPlanets] = useState([]);
  // Lógica realizada com ajuda da mentoria de revisão do Rod do dia 24/02.

  async function returnPlanets() {
    const planet = await fetchAPI();
    setPlanets(planet);
  }

  useEffect(() => {
    returnPlanets();
  }, []);

  return (
    <MyContext.Provider value={ { planets } }>
      {children}
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
}.isRequired;

export default Provider;
