import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserStore from './store/UserStore';
import PetStore from './store/PetStore';
import HistoryStore from './store/HistoryStore';
import RequestStore from './store/RequestStore';
import DonationStore from './store/DonationStore';
import RegistrationStore from './store/RegistrationStore';
import './styles.css'

export const Context = createContext(null)

 const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(
    <Context.Provider value={{
      user: new UserStore(),
      pet: new PetStore(),
      hist: new HistoryStore(),
      request: new RequestStore(),
      donation: new DonationStore(),
      regs: new RegistrationStore()
    }}>
      <App />
    </Context.Provider>
 );

