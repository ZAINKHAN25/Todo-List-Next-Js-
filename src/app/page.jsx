"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./page.css";
import { faPenToSquare, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";


// home page component
export default function Home() {
  let [mainArr, setMainArr] = useState([]);
  let [inputTxt, setInputTxt] = useState("");


  function addTodoFoo() {

    if (inputTxt.trim() != "") {
      mainArr?.push(inputTxt);
      setInputTxt("");
    } else {
      alert("Please Write Something in Todo")
    }
  }

  function delteFoo(index) {
    var selectedItem = mainArr.splice(index, 1);
    setMainArr([...mainArr])
  }

  function editFoo(index) {
    var promptTxt = prompt("Edited Text", mainArr[index]);

    if (promptTxt !== null) {
      const updatedArray = [...mainArr];
      updatedArray[index] = promptTxt;
      setMainArr(updatedArray);
    }
  }


  return (
    <div className="body">
      <div className="card">
        <div className="inputdiv">
          <input
            type="text"
            className="inputOfToDoList"
            placeholder="eg: Wake up at 08:00 AM"
            value={inputTxt}
            onChange={(e) => {
              setInputTxt(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                addTodoFoo();
              }
            }}
          />
          <div className="searhBarDiv" onClick={() => addTodoFoo()}>
            <FontAwesomeIcon icon={faPlus} width={20} />
          </div>
        </div>
        <div className="listDiv">
          {
            mainArr.map((x, i) => {
              return (
                <div key={i} className="singleDiv">
                  <div className="mainMessage">{x}</div>
                  <div className="btnDiv">
                    <FontAwesomeIcon className="iconsOfEdit" icon={faPenToSquare} width={20} onClick={() => editFoo(i)} />
                    <FontAwesomeIcon className="iconsOfEdit" icon={faTrash} width={20} onClick={() => delteFoo(i)} />
                  </div>
                </div>
              )
            })
          }
        </div>
        {
          mainArr.length === 0 ? (
            <span></span>
          ) : (
            <div className="deleteListDiv">
              <button onClick={() => setMainArr([])}>Delete All Todos</button>
            </div>
          )
        }

      </div>
    </div >
  );
}
