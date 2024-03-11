import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
import { v4 } from "uuid";

const Form = ({ setTodos }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const status = e.target[1].value;

    // api'ye kaydedilecek veriyi hazirla

    const newTodo = {
      id: v4(),
      title,
      status,
      date: new Date().toLocaleDateString(),
    };

    axios
      .post("http://localhost:3000/todos", newTodo)

      // api'ye kaydedilirse state'e digerlerinin uzerine ekle(arayuzun guncellenmesi icin)
      .then(() => {
        toast.success("Todo Added");
        setTodos((prev) => [...prev, newTodo]);
      })
      // istek basarisiz olursa
      .catch((err) => toast.error("Sorry, an error occured"));
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="d-flex justify-content-center gap-3 my-5"
    >
      <input className="form-control shadow" type="text" />

      <select className="form-select w-50 shadow">
        <option value="important">important</option>
        <option value="daily">daily</option>
        <option value="job">job</option>
      </select>

      <button className="btn btn-primary shadow">Send</button>
    </form>
  );
};

export default Form;
