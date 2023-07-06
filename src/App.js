import "./styles.css";
import React, { useState } from "react";
export default function App() {
  const [name, setName] = useState("");
  const [names, setNames] = useState([]);
  const [edit, setEdit] = useState(false);
  const [editVal, setEditVal] = useState("");
  const [findText, setFindText] = useState("");
  const [findNames, setFindNames] = useState([]);
  const [searchFlag, setSearchFlag] = useState(false);

  function handleInput(e) {
    setName(e.target.value, "event");
    // console.log(e)
  }
  function handleAdd() {
    if (name !== "") {
      setNames([...names, name]);
      setName("");
    }
    let i = names.indexOf(editVal);
    if (edit == true) {
      console.log(name);
      let newValues = names;
      console.log(i);
      newValues.splice(i, 1, name);
      setNames([...newValues]);
      setEdit(false);
    }
  }
  const handleSearch = () => {
    // let findText = e.target.value;
    setSearchFlag(true);
    setFindText(name);
    let newNames = names.filter((item) => item.includes(name));
    console.log(newNames);
    setFindNames([...newNames]);
  };
  const handleDelete = (value, i) => {
    let newValues = names.filter((item, ind) => ind !== i);
    let newValues1 = names;
    newValues1.splice(i, 1);
    console.log(newValues1);
    setNames([...newValues1]);
  };
  const handleUpdate = (value, i) => {
    setEditVal(value);
    setName(value);
    setEdit(true);
  };
  const showEl = (name) => {
    return (
      <div>
        <p>{name}</p>
        <button onClick={() => handleDelete(name, i)}>Delete</button>
        <button onClick={() => handleUpdate(name, i)}>Update</button>
      </div>
    );
  };
  return (
    <div className="App">
      <input
        value={name}
        onChange={(e) => handleInput(e)}
        names={name.length > 0 ? findNames : names}
      />
      <button onClick={handleAdd}>{edit ? "Modify" : "Add"}</button>
      <button onClick={handleSearch}>Search</button>

      {name.length > 0 && searchFlag
        ? findNames.map((name, i) => showEl(name))
        : names.map((name, i) => showEl(name))}
    </div>
  );
}
