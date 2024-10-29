import React, { useState } from 'react'
import "./Header.css"
import treeLogo from "../assets/tree.png"


function Header({ itemList, setItemList }) {

    const [inputText, setInputText] = useState('')
    const [itemNumber, setItemNumber] = useState(0)

    const addHandler = () => {
        // console.log(itemList)
        const myList = [...itemList];
        myList.push({
            inputText,
            itemNumber,
        })
        console.log(myList)
        setItemList(myList)
    }

    return (
        <>
            <div className="top">
                <img className='topImg' src={treeLogo} />
                <p>FAR AWAY</p>
            </div>
            <div className="top2">
                <p>Whhat do you need for your trip</p>
                <select onChange={(e) => setItemNumber(e.target.value)}>
                    {
                        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((elem) => (
                            <option>{elem}</option>

                        ))
                    }

                </select>
                <input onChange={(e) => setInputText(e.target.value)} value={inputText} type="text" placeholder='Item...' />
                <button onClick={addHandler} type="button" className='headerBtn'>ADD</button>
            </div>

        </>
    )
}

export default Header;