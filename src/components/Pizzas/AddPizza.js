import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api';

const AddPizza = () => {
  const { personId } = useParams();
  const [topping, setTopping] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const formData = {
      topping,
      "person_id": personId
    };

    api
      .post('/pizzas', formData)
      .then((response) => {
        console.log('Pizzas added successfully:', response.data);
        setTopping('');
      })
      .catch((error) => {
        console.error('Error adding pizza:', error);
      });
  };

  return (
    <div>
      <h2>Add Pizza Consumption</h2>
      <form onSubmit={handleFormSubmit}>
        <label>
          Topping:
          <input
            type="text"
            value={topping}
            onChange={(event) => setTopping(event.target.value)}
          />
        </label>
        <br />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddPizza;
