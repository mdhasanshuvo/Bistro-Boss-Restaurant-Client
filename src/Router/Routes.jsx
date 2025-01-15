import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';

const Routes = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <h2>Hello world</h2>
        }
      ]
    },
  ]);

export default Routes;