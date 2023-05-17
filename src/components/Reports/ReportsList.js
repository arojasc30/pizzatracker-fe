import React from 'react';
import { Link } from 'react-router-dom';

const PizzasList = () => {
  return (
    <div>
      <h2>Reports</h2>
      <ul>
        <li key="1">
          Consumption Streak
          <Link to={`/report/consumption_streaks`}> Generate report</Link>
        </li>
        <li key="2">
          Most pizzas day
          <Link to={`/report/most_pizzas_day`}> Generate report</Link>
        </li>
      </ul>
    </div>
  );
};

export default PizzasList;
