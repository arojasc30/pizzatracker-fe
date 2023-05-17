import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import API from '../../services/api';

const PizzasList = () => {
  const { reportSlug } = useParams();
  const [reportResults, setReportResults] = useState(null);

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const response = await API.get(`/reports/${reportSlug}`);
        setReportResults(response.data);
      } catch (error) {
        console.error('Error on generating report:', error);
      }
    };

    fetchPizzas();
  }, []);

  const formatReportResults = () => {
    if (reportSlug === 'consumption_streaks') {
      // Perform specific action or return specific value for 'some-value'
      return (
        <ul>
          {reportResults?.map((streak, index) => {
            return (
              <li key={index}>
                {`Streak Start: ${streak?.start_date} End: ${streak?.end_date}`}
              </li>
            );
          })}
        </ul>
      );
    } else if (reportSlug === 'most_pizzas_day') {
      // Perform specific action or return specific value for 'other-value'
      return <h1>{`The most pizzas day was: ${reportResults}`}</h1>;
    } else {
      // Perform default action or return default value
      return <h1>No Data</h1>;;
    }
  }

  return (
    <div>
      <h2>Report results</h2>
      {formatReportResults()}
    </div>
  );
};

export default PizzasList;
