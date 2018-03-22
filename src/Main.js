import React from 'react';
import { Route } from 'react-router-dom';
import Users from './Users';


const Main = () => {
  return (
    <div>
      <Route path="/" render={() => <Users />} />
    </div>
  );
};

export default Main;
