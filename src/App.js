import { useReducer, createContext } from 'react';

import reducer,{initState} from './Reducer/Reducer.js'
import './App.css';
import Available from './Compenents/Available'
import Expense from './Compenents/Expense'
import History from './Compenents/History'
import Input from './Compenents/Input'

export const appContex = createContext()

function App() {
  const [state,dispatch] = useReducer(reducer,initState)
  return(
    <appContex.Provider value={state}>
      <div className='container'>
        <h1 className='heading'>Expense Tracker</h1>
        <Available/>
        <Expense/>
        <History/>
        <Input dispatch={dispatch}/>
      </div>
    </appContex.Provider>
  )
}

export default App;
