
import './App.css';
import Header from "./Mycomponents/header";
import Footer from "./Mycomponents/footer";
import {Todos} from "./Mycomponents/Todos";
import {Addtodo} from "./Mycomponents/Addtodo";
import React, { useState } from 'react';

function App() {
  const onDelete=(todo) => {
    console.log("i am on delete",todo)
    setTodos(todos.filter((v) => {
      return v !== todo;
    }));
  }
  const addTodo = (title , desc) => {
    console.log("add", title, desc)
    let sno;
    if (todos.length == 0) {
       sno = 0;
    }
    else {
      sno = todos[todos.length-1].sno+1
      
    }
    const mytodo = {
      sno: sno,
      title: title,
      desc: desc,
      
    }
    setTodos([...todos, mytodo]);
    console.log(mytodo)
  }
  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "pehla kaam",
      desc: "pehla kaam kr lena chahihye",
    },
    {
      sno: 2,
      title: "doosra kaam",
      desc: "doosra kaam kr lena chahihye",
    },
    {
      sno: 3,
      title: "teesra kaam",
      desc: "teesra kaam kr lena chahihye",
    }
  ]);
  return (
    <> 
      <Header title="vinshot" searchbar={true} />
      <Addtodo addTodo={addTodo}/>
      <Todos todos={todos} onDelete={onDelete }/>
      <Footer/>
      </>
  );
}

export default App;
