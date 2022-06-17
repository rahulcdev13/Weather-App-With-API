import React, { useEffect, useState } from 'react'
import "./Style.css";
import 'font-awesome/css/font-awesome.min.css';

//get localstorage data 
const getLocaldata = () => {
  const lists = localStorage.getItem("mytodolist");
  if (lists) {
    return JSON.parse(lists);
  } else {
    return [];
  }
};


const Todo = () => {
  const [totoData, setTotoData] = useState("");
  const [addData, setAddData] = useState(getLocaldata());
  const [editTodoItem, setEditItem] = useState("");
  const [toggleButton, settoggleButton] = useState(false);

  //Add the item function
  const AddList = () => {
    if (!totoData) {
      alert('please fill the data')
    } else if (totoData && toggleButton) {
      setAddData(
        addData.map((currVal)=>{
          if(currVal.id===editTodoItem){
            return {...currVal,name:totoData}
          }
          return currVal;
        })
      );
      setTotoData("");
    setEditItem(null);
    settoggleButton(false);
    }
    else {
      const myNewInputData = {
        id: new Date().getTime().toString(),
        name: totoData,
      }
      setAddData([...addData, myNewInputData]);
      setTotoData("");
    }
  }
  //How to delete items 
  const deleteItem = (index) => {
    const undateItem = addData.filter((currVal) => {
      return currVal.id !== index;
    })
    setAddData(undateItem);
  }

  //how to edit item
  const editItem = (index) => {
    const edititem = addData.find((currVal) => {
      return currVal.id === index;
    });
    setTotoData(edititem.name)
    setEditItem(index);
    settoggleButton(true);
  };

  //Remove all the element
  const RemoveAll = () => {
    setAddData([]);
  };

  // How to Store and set on localStorage data 
  useEffect(() => {
    localStorage.setItem("mytodolist", JSON.stringify(addData))
  }, [addData])


  return (
    <div className='main-div'>
      <div className='chile-div'>
        <figure>
          <p style={{ fontSize: "150px" }}>📝</p>
          <figcaption>Add Your ToDo List Here ✌</figcaption>
        </figure>
        <div className='addItems'>
          <input type="text"
            placeholder=' ✍ Add Items'
            className='form-control'
            onChange={(event) => setTotoData(event.target.value)}
            value={totoData}
          />

          {settoggleButton ? <i className="fa fa-plus" style={{ fontSize: "15px" }} onClick={AddList}></i> : <i className="fa fa-edit add-btn" onClick={AddList}></i>}
          {/* <i className="fa fa-plus add-btn" onClick={AddList}></i> */}

          {/* show our Items */}
          <div className='showItems'>

            {addData.map((currVal) => {
              return (
                <div className='eachItem' key={currVal.id} >
                  <h2>{currVal.name}</h2>
                  <div className='todo-btn'>
                    <i className="fa fa-edit" style={{ fontSize: "15px" }} onClick={() => editItem(currVal.id)}></i>
                    <i className="fa fa-trash" style={{ fontSize: "15px" }} onClick={() => deleteItem(currVal.id)}></i>
                  </div>
                </div>
              )
            })}

          </div>

          {/* remove all button list */}
          <div className='showItems'>
            <button className='btn effect04' data-sm-link-text="Remove All" onClick={RemoveAll}><span>Check List</span></button>
          </div>
        </div>
      </div>

    </div>
  )
}
export default Todo
