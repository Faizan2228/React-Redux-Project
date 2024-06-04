import React, { useState } from 'react'
import { buyCake } from '../redux'
import { connect } from 'react-redux'

const NumCakesContainer = (props) => {

    const [isNum, setIsNum] = useState(1)

  return (
    <div>
        <h2>Number of cakes - {props.numOfCakes}</h2>
        <input type="number" value={isNum} onChange={(e) => setIsNum(e.target.value)} />
        <button onClick={() => props.buyCake(isNum)}>Buy {isNum} cake</button>
    </div>
    
  )
}

const mapStateToProps = state => {
    return{
        numOfCakes: state.cake.numOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return{
        buyCake: (num)=> dispatch(buyCake(num))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NumCakesContainer)