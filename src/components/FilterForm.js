import React, { useContext, useState } from 'react';
import MyContext from '../context/index';

function FilterForm() {
  const { setFilter } = useContext(MyContext);
  const columns = [
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water']; // Colunas dada pelo README.
  const comparisonFilter = ['maior que', 'menor que', 'igual a']; // Filtros de comparação.
  const [inputColumn, setInputColumn] = useState('population'); // Population é o valor inicial.
  const [inputComparison, setInputComparison] = useState('maior que'); // Maior que é o valor inicial.
  const [inputValue, setValueInput] = useState(0); // 0 é o valor inicial.

  const filterButton = () => {
    setFilter((prevFilter) => ({
      ...prevFilter,
      filterByNumericValues: [...prevFilter.filterByNumericValues, {
        columns: inputColumn,
        comparisonFilter: inputComparison,
        value: inputValue }],
    }));
    setValueInput('');
  };

  return (
    <form>
      <label htmlFor="column-filter">
        <select
          data-testid="column-filter"
          id="column-filter"
          onChange={ ({ target }) => setInputColumn(target.value) } // Vai pegar o valor escolhido da coluna.
        >
          { columns.map((option) => (
            <option key={ option }>{ option }</option>
          )) }
        </select>
      </label>

      <label htmlFor="comparison-filter">
        <select
          data-testid="comparison-filter"
          id="comparison-filter"
          onChange={ ({ target }) => setInputComparison(target.value) } // Vai pegar o valor escolhido de comparação.
        >
          { comparisonFilter.map((option) => (
            <option key={ option }>{ option }</option>
          )) }
        </select>
      </label>

      <label htmlFor="value-filter">
        <input
          data-testid="value-filter"
          type="number"
          id="value-filter"
          value={ inputValue }
          onChange={ ({ target }) => setValueInput(target.value) } // Vai pegar o valor numérico escolhido.
        />
      </label>

      <button
        data-testid="button-filter"
        type="button"
        onClick={ filterButton } // Assim que ativado, ativaráa funcão filterButton.
      >
        Filtrar
      </button>
    </form>
  );
}

export default FilterForm;
