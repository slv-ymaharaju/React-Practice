import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ParentComponent from './components/Parent_Component/parent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ParentComponent/>
  </React.StrictMode>
);

