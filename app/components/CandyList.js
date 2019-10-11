import React from "react"
import {connect} from "react-redux"
import {getAllCandy} from "../reducers/index"

// const candies = [{
//   name: 'Skittles',
//   description: 'Taste the rainbow',
//   quantity: 2,
//   imageUrl: 'http://pluspng.com/img-png/png-skittles--400.png'
// }, {
//   name: 'KitKat',
//   description: 'Make the most of your break',
//   quantity: 5,
//   imageUrl: 'https://www.kitkat.co.uk/content/content/img/range/4-finger-milk.png'
// }, {
//   name: 'M&M',
//   description: 'Melts in your mouth, not in your hand',
//   quantity: 4,
//   imageUrl: 'https://pbs.twimg.com/media/DXOHG0zX4AAhZ1i.png'
// }];

class CandyList extends React.Component{

  render() {
    const {candies} = this.props
    return (
    <div className="allCandy">
    {candies.map(candy => {
      console.log(candy)
      return (
      <div className ="oneCandy" key={candy.name}>
        <p className="candyName">{candy.name}</p>
        <img src={candy.imageUrl} className="oneCandyImg"/>
        <p className="candyQuantity">Quantity: {candy.quantity}</p>
        <p className="candyDescription">{candy.description}</p>
      </div>
      )
    })}
    </div>
  )}

  componentDidMount(){
    this.props.getCandy()
  }
}

const mapState = (state) => {
  return {
    candies: state.candies
  }
}

const mapDispatch = (dispatch) => {
  // YOUR CODE HERE
  return {getCandy: () => dispatch(getAllCandy())}
}


export default connect(mapState, mapDispatch)(CandyList)
