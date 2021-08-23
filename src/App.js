import "./App.css";
import Navbar from "./component/Navbar";

import Form from "./component/Form";
import ListContainer from "./component/ListContainer";
import { useEffect, useState, useRef } from "react";

function App() {
  const [todo, setTodo] = useState([]);
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  const scrollRef = useRef(null);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setNote((preValue) => {
      return { ...preValue, [name]: value };
    });
  };

  const submitNote = (event, key) => {
    setTodo((prev) => [...prev, note]);
    setNote({
      title: "",
      content: "",
    });
    storeData(todo);
    event.preventDefault();
    scrollToBottom();
  };
  const handleRemove = (key) => {
    if (key >= 0) {
      todo.splice(key, 1);
      setTodo([...todo]);
      storeData(todo);
    }
  };

  const handleEdit = (item, key) => {
    todo[key] = item;
    setTodo([...todo]);
  };

  const storeData = async () => {
    try {
      await localStorage.setItem("item", JSON.stringify(todo));
    } catch (e) {
      console.log(e);
    }
  };

  //get data from local storage when render
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const jsonValue = await localStorage.getItem("item");
      let odata = JSON.parse(jsonValue);
      return jsonValue != null ? setTodo([...odata]) : null;
    } catch (e) {
      console.log(e, "Error Occured");
    }
  };

  const scrollToBottom = () => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="app">
      <div className="app-container">
        <Navbar />
        <div style={{ height: "fit-content", position: "relative" }}>
          <Form
            setTodo={setTodo}
            todo={todo}
            addNote={submitNote}
            inputChange={handleChange}
            note={note}
          />
        </div>

        <div className="app-list">
          {todo.map((item, index) => (
            <ListContainer
              index={index}
              item={item}
              onRemove={handleRemove}
              onEdit={handleEdit}
            />
          ))}
          <div ref={scrollRef} />
        </div>
      </div>
    </div>
  );
}

export default App;
