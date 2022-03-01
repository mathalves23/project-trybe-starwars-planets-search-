import React, { useContext, useEffect, useState } from 'react';
import MyContext from '../context/index';

function Table() {
  const { planets, selectedFilter } = useContext(MyContext);
  const [filterPlanetsName, setFilterPlanetsName] = useState([]);

  // Filtragem numérica
  const numericFilter = (planet, filterByNumValue) => {
    const { columns, comparisonFilter, value } = filterByNumValue;
    if (comparisonFilter === 'maior que') {
      return Number(planet[columns]) > Number(value);
    }
    if (comparisonFilter === 'menor que') {
      return Number(planet[columns]) < Number(value);
    }
    if (comparisonFilter === 'igual a') {
      return Number(planet[columns]) === Number(value);
    }
  };

  // Filtragem por nome
  useEffect(() => {
    const filterNames = planets.filter((planet) => (
      planet.name.includes(selectedFilter.filterByName.name)
        && selectedFilter.filterByNumericValues
          .every((searchFilter) => numericFilter(planet, searchFilter))));
    setFilterPlanetsName(filterNames);
  }, [planets, selectedFilter]);

  return (
    // Table Source: https://www.w3schools.com/tags/tag_thead.asp
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Climate</th>
          <th>Created</th>
          <th>Diameter</th>
          <th>Edited</th>
          <th>Filmes</th>
          <th>Gravity</th>
          <th>Orbital Period</th>
          <th>Population</th>
          <th>Rotation Period</th>
          <th>Surface Water</th>
          <th>Terrain</th>
          <th>URL</th>
        </tr>
      </thead>

      <tbody>
        { filterPlanetsName.map((planet) => (
          <tr key={ planet.name }>
            <td>{ planet.name }</td>
            <td>{ planet.climate }</td>
            <td>{ planet.created }</td>
            <td>{ planet.diameter }</td>
            <td>{ planet.edited }</td>
            <td>{ planet.filmes }</td>
            <td>{ planet.gravity }</td>
            <td>{ planet.orbital_period }</td>
            <td>{ planet.population }</td>
            <td>{ planet.rotation_period }</td>
            <td>{ planet.surface_water }</td>
            <td>{ planet.terrain }</td>
            <td>{ planet.url }</td>
          </tr>
          // Estipulando quais serão as rolls, atende-se o requisito 1 de excluir a coluna residents.
        )) }
      </tbody>
    </table>
  );
}

export default Table;
