
import React from 'react';
import Headers from './components/Headers';
import {Footer} from './components/Footer';
import { Balance } from './components/Balance';
import {IncomeExpenses} from './components/IncomeExpenses'; 
import TransactionsList from './components/TransactionsList'; 
import AddTransaction from './components/AddTransaction'; 
import { GlobalProvider } from './context/GlobalState'; 

import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Headers /> 
      <div className= "container">
        <Balance/>
        <IncomeExpenses/>
        <TransactionsList/> 
        <AddTransaction/> 
      </div>
      <Footer/>
    </GlobalProvider>
  );
}

export default App;
