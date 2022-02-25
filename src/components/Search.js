import React, { useContext } from 'react';
import MyContext from '../context/index';

function Input() {
  const { searchName } = useContext(MyContext);

  return (
    <form onSubmit={ (e) => e.preventDefault() }>
      {/* Aqui fica o input responsável por pesquisar o planeta de acordo com o nome */}
      <label htmlFor="name-input">
        <input
          data-testid="name-filter"
          type="text"
          name="searchPlanets"
          id="searchPlanets"
          placeholder="Search Planets"
          onChange={ searchName }
        />
      </label>
    </form>
  );
}

export default Input;
