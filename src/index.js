import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import GroupList from './GroupList';
import Proposal  from './Proposal';
import Group  from './Group';
import reportWebVitals from './reportWebVitals';
import { Routes, Route, Link, BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<GroupList />}>

              </Route>

              <Route path="/groups/:groupID" element={<Group />}>

              </Route>
              <Route path="/groups/:groupID/proposal/:proposalID" element={<Proposal />} />
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
