import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import Dashboard from "./Pages/Dashboard";
import Leads from "./Pages/Leads";
import Transactions from "./Pages/Transactions";
import Analytics from "./Pages/Analytics";
import Integration from "./Pages/Integration";
import Calendar from "./Pages/Calendar";
import Pages from "./Pages/Pages";
import Settings from "./Pages/Settings";
import Documentation from "./Pages/Documentation";
import Facts from "./Pages/Facts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
      path:"/",
      element:<Dashboard/>,
    
    },
    {
      path:'/leads',
      element:<Leads/>,
    },
    {
      path:'/Transactions',
      element:<Transactions/>,
    },
    {
      path:'/Analytics',
      element:<Analytics/>,
    },
    {
      path:'/Integration',
      element:<Integration/>,
    },
    {
      path:'/Calendar',
      element:<Calendar/>,
    },
    {
      path:'/Pages',
      element:<Pages/>,
    },
    {
      path:'/Settings',
      element:<Settings/>,
    },
    {
      path:'/Documentation',
      element:<Documentation/>,
    },
    {
      path:'/Facts',
      element:<Facts/>,
    },
    
  ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);