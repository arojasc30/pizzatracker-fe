import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PeopleList from '../People/PeopleList';
import AddPerson from '../People/AddPerson';
import PizzasList from '../Pizzas/PizzasList';
import AddPizza from '../Pizzas/AddPizza';

function RoutesConfig() {
  return (
    <Routes>
      <Route exact path="/people" element={<PeopleList />} />
      <Route
        exact
        path="/pizzas-by-person/:personId"
        element={<PizzasList />}
      />
      <Route exact path="/add-person" element={<AddPerson />} />
      <Route exact path="/add-person" element={<AddPerson />} />
      <Route exact path="/add-pizza/:personId" element={<AddPizza />} />
    </Routes>
  );
}

export default RoutesConfig;
