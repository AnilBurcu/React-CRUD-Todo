import axios from "axios";
import formatDate from "./utils/formatDate";
import ContentMode from "./ContentMode";
import EditMode from "./EditMode";
import { useState } from "react";
import { toast } from "react-toastify";

const ListItem = ({ todo, setTodos, allTodos }) => {
  const [isEdit, setIsEdit] = useState(false);

  const handleDelete = () => {
    // api'ye delete istegi at

    axios
      .delete(`http://localhost:3000/todos/${todo.id}`)
      // todoyu state'den kaldir
      .then(() => {
        // butun todo'lar icinden id'sini bildigimiz elemani kaldir
        const filtrededTodos = allTodos.filter((item) => item.id !== todo.id);
        //state'i guncelle
        setTodos(filtrededTodos);
        toast.info("Todo Deleted");
      })
      .catch((err) => toast.error("Failed"));
  };

  //guncelleme onaylaninca calisir
  const handleUpdate = (e) => {
    e.preventDefault();
    // inputtaki degerler
    const status = e.target[0].value;
    const title = e.target[1].value;
    // API guncelle
    axios
      .patch(`http://localhost:3000/todos/${todo.id}`, { title, status })
      // API guncellenirse state'i guncelle
      .then(() => {
        // 1) mevcut todo'nun title ve status degerlerini guncelle
        const updated = { ...todo, title, status };
        // 2) dizideki eski tidi yerine guncel halini koy
        const newToDos = allTodos.map((item) =>
          item.id === updated.id ? updated : item
        );
        // 3) state'i guncelle
        setTodos(newToDos);

        // 4) duzenleme modundan cik
        setIsEdit(false);
        // Bildirim gonder
        toast.success("Succesfully Updated");
      });
  };
  // Tarihi formatlayan fonk. ile sadece gun ve ay yazdirdik
  return (
    <li className="relative p-3 list-group-item d-flex justify-content-between align-items-center gap-3">
      {isEdit ? (
        <EditMode
          todo={todo}
          handleUpdate={handleUpdate}
          setIsEdit={setIsEdit}
        />
      ) : (
        <ContentMode
          todo={todo}
          handleDelete={handleDelete}
          setIsEdit={setIsEdit}
        />
      )}

      <span className="date">{formatDate(todo.date)}</span>
    </li>
  );
};

export default ListItem;
