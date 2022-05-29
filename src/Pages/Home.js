import React, { useState } from "react";
import "./pageStyling/home.scss";
import Footer from "../Components/footer/Footer";

function Home() {
  const [name, setName] = useState("");
  const [array, setArray] = useState([]);
  const [showInput, setShowInput] = useState(true);
  const [first, setFirst] = useState("");

  // Here we will move everything entered on the input unto an array so that we can later loop over it and display the information.

  function handleSubmit(e) {
    e.preventDefault();
    //IN here we find the id of the each value that will be submitted and the item that will be submited from the input
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

  //When we click on the delete button we return all items that dont correspond to the element that we may want to delete

  function deleteItem(id) {
    const newArray = array.filter((item) => item.id !== id);
    setArray(newArray);
  }

  //Here we are toggling elements from the dom

  function displayInput() {
    setShowInput(!showInput);
  }

  /*We want to be able to have the capability of editing the todo. Here we find the element, clear the value

*/
  function changeText(id) {
    [...array].map((todo) => {
      if (todo.id === id) {
        todo.list = first;
      }
      return todo;
    });

    setFirst("");
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
                <div>
                  <button
                    className="deleteBtn"
                    onClick={() => {
                      deleteItem(info.id);
                    }}
                  >
                    Delete
                  </button>
                </div>

                <button
                  onClick={displayInput}
                  className={showInput ? "editBtn" : "noDisplay"}
                >
                  Edit Todo
                </button>
                {showInput ? (
                  ""
                ) : (
                  <input
                    className="changeInput"
                    type="text"
                    placeholder="change the input"
                    onChange={(e) => {
                      setFirst(e.target.value);
                    }}
                  />
                )}
                {showInput ? (
                  ""
                ) : (
                  <button
                    onClick={() => changeText(info.id)}
                    className="modifyBtn"
                  >
                    Change
                  </button>
                )}
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
