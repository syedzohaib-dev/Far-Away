import React from 'react'
import "./Main.css"

function Main({ itemList }) {
  return (
    <>
      <div className="main">
        {
          itemList.map((item) => (
            <div className="list">
              <input type="checkbox" name="" id="" />
              <p>{item.itemNumber}</p>
              <p>{item.inputText}</p>
              <button type="button">X</button>
            </div>
          ))
        }

      </div>

      <div className="main2">
        <div className='option'></div>
        <select>SORT BY INPUT ORDER</select>
        <button>CLEAR LIST</button>
      </div>

    </>

  )
}

export default Main