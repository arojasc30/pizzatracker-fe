import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PeopleList from '../People/PeopleList';

function RoutesConfig() {
  return (
    <Routes>
      <Route exact path="/people" element={<PeopleList />} />
    </Routes>
  );
}

export default RoutesConfig;
