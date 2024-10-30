import React from 'react'
import "./Footer.css"


function Footer({itemList}) {
  return (
    <div className="footer">
      <p>        You have {itemList.length} items on your list,and you already packed 0 (0%)
      </p>
    </div>

  )
}

export default Footer