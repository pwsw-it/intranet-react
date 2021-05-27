import React from 'react';
import ReactDOM from 'react-dom';

import Addreses from './Addresses'
import CAddreses from './CAddresses'

ReactDOM.render(
  <React.StrictMode>
    <Addreses />
  </React.StrictMode>,
  document.getElementById('r1')
);

ReactDOM.render(
  <React.StrictMode>
    <CAddreses />
  </React.StrictMode>,
  document.getElementById('r2')
);

