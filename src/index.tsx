import React from 'react';
import ReactDOM from 'react-dom';

import Contacts from './Contacts'
import { Provider } from 'react-redux'
import { store } from './rdx';

ReactDOM.render(
<Provider store={store}>
   <React.StrictMode>
    <Contacts />
  </React.StrictMode>
  </Provider>  
  ,
  document.getElementById('r1')
);



