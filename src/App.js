import './App.css';
import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import TodoList from './redux/modules/TodoList';
import InputForm from './redux/modules/inputForm';

//useSelector,useDispatch
//const result=useSelector((state)=>state.someState)
//const dispatch=useDispatch();
//dispatch(ACTION)
 
function App() {
  return (
    <div>
      <div>
        <h1>todoList</h1>
        <inputForm/>
        <TodoList/>
      </div>
    </div>
  );
}

export default App;

