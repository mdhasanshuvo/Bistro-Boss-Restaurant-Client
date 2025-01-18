import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../Pages/Home';
import Menu from '../Pages/Menu';
import Order from '../Pages/Order';

const Routes = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "menu",
            element: <Menu></Menu>
        },
        {
            path: "order",
            element: <Order></Order>
        },
      ]
    },
  ]);

export default Routes;