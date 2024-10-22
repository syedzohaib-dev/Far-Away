import React, { useState } from 'react'
import "./App.css"
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/footer'

function App() {

  const [itemList, setItemList] = useState([])



  return (

    <>

      <div className="container-fluid father">
        <Header itemList={itemList} setItemList={setItemList} />
        <Main itemList={itemList} />
        <Footer itemList={itemList} />

      </div>

    </>
  )
}

export default App