import React from 'react'
import {connect} from 'react-redux'
import {getOneCandy, updateCandyQty} from '../reducers/index'


class SingleCandy extends React.Component{

  render() {
    const {singleCandy} = this.props
    console.log(singleCandy, this.props)
    this.qty = singleCandy.quantity

    return (
    <div >
      <div key={singleCandy.name}>
        <p >{singleCandy.name}</p>
        <img src={singleCandy.imageUrl} />
        <p>Quantity:
          <select defaultValue={singleCandy.quantity} onChange={(event) => { this.qty = event.target.value}}>
            <option value={1} >1</option>
            <option value={2} >2</option>
            <option value={3} >3</option>
            <option value={4} >4</option>
            <option value={5} >5</option>
            <option value={6} >6</option>
            <option value={7} >7</option>
            <option value={8} >8</option>
            <option value={9} >9</option>
            <option value={10} >10</option>
          </select>
        </p>
        <p >{singleCandy.description}</p>
      </div>
    </div>
    )
  }

  componentDidMount(){
    this.props.getOneCandy(this.props.match.params.id)
  }
  componentWillUnmount(){
    this.props.updateCandyQty(this.props.match.params.id, this.qty)
  }
}

const mapState = (state) => {
  return {
    singleCandy: state.oneCandy
  }
}

const mapDispatch = (dispatch) => {
  // YOUR CODE HERE
  return {
    getOneCandy: (id) => dispatch(getOneCandy(id)),
    updateCandyQty: (id,qty) => dispatch(updateCandyQty(id,qty)),
  }
}


export default connect(mapState, mapDispatch)(SingleCandy)
