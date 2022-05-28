import React, { useState } from "react";
import "./pageStyling/home.scss";
import Footer from "../Components/footer/Footer";

function Home() {
  const [name, setName] = useState("");
  const [array, setArray] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    let values = {
      id: Math.floor(Math.random() * 1000),
      list: name,
    };

    if (name.length <= 1) {
      alert("You need to enter something");
    } else {
      setArray((info) => [...info, values]);
    }
    setName("");
  }

  function deleteItem(id) {
    const newArray = array.filter((item) => item.id !== id);
    setArray(newArray);
  }

  return (
    <div>
      <div className="wrapper">
        <div className="headerContainer">
          <h1 className="header">The Trucking Solutions ToDo App</h1>
        </div>
        <div className="formContainer">
          <form onSubmit={handleSubmit}>
            <div className="inputContainer">
              <input
                placeholder="Enter your daily tasks.."
                className="mainInput"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <div className="btnContainer">
                <button type="submit" className="mainBtn">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="dataContainer">
          <ul>
            {array.map((info, id) => (
              <div className="horizontal" key={id}>
                <li id="listItem" className="listItem">
                  {id + 1}. {info.list}
                </li>
                <button
                  className="deleteBtn"
                  onClick={() => deleteItem(info.id)}
                >
                  Delete
                </button>
              </div>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
