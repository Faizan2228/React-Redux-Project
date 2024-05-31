import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyIceCream } from '../redux/IceCream/IceCreamAction'

const IceCreamContainer = () => {
    const numIceCream = useSelector(state => state.IceCream.numOfIceCreams)
    const dispatch = useDispatch()
  return (
    <div>
        <h2>Buy Ice-Cream - {numIceCream} </h2>
        <button onClick={() => dispatch(buyIceCream())}>Buy icecream</button>
    </div>
  )
}

export default IceCreamContainer