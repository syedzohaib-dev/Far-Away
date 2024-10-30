import React from 'react'
import "./Main.css"

function Main({ itemList, setItemList }) {
  const deleteHandler = (id) => {
    setItemList((prevList) => prevList.filter((item) => item.id !== id))
  }
  return (
    <>
      <div className="main">
        {
          itemList.map((item) => (
            <div className="list">
              <input type="checkbox" name="" id="" />
              <p>{item.itemNumber}</p>
              <p>{item.inputText}</p>
              <button type="button" onClick={() => deleteHandler(item.id)}>X</button>
            </div>
          ))
        }

      </div>

      <div className="main2">
        <div className='option'></div>
        <select>
          {
            [1, 2, 3].map((elem) => (
              <option>{elem}</option>
            ))
          }
        </select>
        <button>CLEAR LIST</button>
      </div>

    </>

  )
}

export default Main