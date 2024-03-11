import React, { useEffect, useState } from "react";
import Form from "./components/Form";
import Loader from "./components/Loader";
import ListItem from "./components/ListItem";
import axios from "axios";

const App = () => {
  //* Ekranda degisiklik yapmak icin tuttugumuz state
  const [todos, setTodos] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/todos")
      .then((res) => setTodos(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container p-3 p-md-5">
      <h1 className="text-center">
        Server
        <span className="text-warning">CRUD</span>
      </h1>

      <Form setTodos={setTodos} />

      <ul className="list-group">
        {/* Veriler API'dan gelene kadar yukleniyor bas */}
        {!todos && <Loader />}
        {/* Veriler gelince ekrana bas */}
        {/* 1. Yol 
        {todos && todos.map((todo) => <li key={todo.id}>Eleman</li>)}
        */}
        {/* 2. Yol optional chaining*/}
        {todos?.map((todo) => (
          <ListItem
            key={todo.id}
            todo={todo}
            allTodos={todos}
            setTodos={setTodos}
          />
        ))}
      </ul>
    </div>
  );
};

export default App;
