import React, { useEffect, useState } from 'react';
import API from '../../services/api';

const PeopleList = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    // Fetch people data from API or any data source
    const fetchPeople = async () => {
      try {
        const response = await API.get('/people');
        setPeople(response.data);
      } catch (error) {
        console.error('Error fetching people:', error);
      }
    };

    fetchPeople();
  }, []);

  return (
    <div>
      <h2>People List</h2>
      {people.length === 0 ? (
        <p>No people found.</p>
      ) : (
        <ul>
          {people.map((person) => (
            <li key={person.id}>{person.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PeopleList;
