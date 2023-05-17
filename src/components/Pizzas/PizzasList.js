import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import API from '../../services/api';

const PizzasList = () => {
  const { personId } = useParams();
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const response = await API.get(`/pizzas/${personId}`);
        setPizzas(response.data);
      } catch (error) {
        console.error('Error fetching people:', error);
      }
    };

    fetchPizzas();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  }

  return (
    <div>
      <h2>Eaten pizzas</h2>
      {pizzas.length === 0 ? (
        <p>No pizzas found.</p>
      ) : (
        <>
          <ul>
            {pizzas.map((pizza) => (
              <li key={pizza.id}>
                {`${pizza.topping} on ${formatDate(pizza.date)}`}
              </li>
            ))}
          </ul>
          <Link to={`/add-pizza/${personId}`}>Add Pizza</Link>
        </>
      )}
    </div>
  );
};

export default PizzasList;
