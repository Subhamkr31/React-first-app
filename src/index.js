import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Forms from './Form/form'
import RadioSelect from './Form/Radioform'


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <Forms />
    <RadioSelect />
  </React.StrictMode>
);


