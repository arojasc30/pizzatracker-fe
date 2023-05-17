import React, { useState } from 'react';
import api from '../../services/api';

const AddPerson = () => {
  const [name, setName] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const formData = {
      name,
    };

    api
      .post('/people', formData)
      .then((response) => {
        console.log('Person added successfully:', response.data);
        setName('');
      })
      .catch((error) => {
        console.error('Error adding person:', error);
      });
  };

  return (
    <div>
      <h2>Add Person</h2>
      <form onSubmit={handleFormSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>
        <br />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddPerson;
