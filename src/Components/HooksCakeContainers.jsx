import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyCake } from '../redux'

const HooksCakeContainers = () => {
    const numOfCakes = useSelector(state => state.cake.numOfCakes)
    const dispatch = useDispatch()
  return (
    <div>
        <h2>Num of cakes - {numOfCakes} </h2>
        <button onClick={() => dispatch(buyCake())}>Buy cakessss</button>
    </div>
  )
}

export default HooksCakeContainers