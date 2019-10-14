import axios from "axios"
const emptyCandy = {
  name: "",
  imageUrl: "",
  quantity: 0,
  description: ""
};

const initialState = {
  candies: [],
  oneCandy: emptyCandy
}


const GOT_ALL_CANDY = 'GOT_ALL_CANDY'

const GOT_ONE_CANDY = 'GOT_ONE_CANDY'

const UPDATED_CANDY_QTY = 'UPDATED_CANDY_QTY'

const gotAllCandy = (candies) => {
  return {
    type: GOT_ALL_CANDY,
    candies
  }
}

const gotOneCandy = candy => {
  return {type: GOT_ONE_CANDY,
  candy}
}
const updatedCandyQty = (id,qty) => {
  return {
    type: UPDATED_CANDY_QTY,
    id,
    qty
  }
}


export const getOneCandy = (id) => {
  return async (dispatch,getState) => {
    const {data} = await axios.get(`/api/candies/${id}`)
    dispatch(gotOneCandy(data))
  }
}
export const getAllCandy = () => {
  return async (dispatch,getState) => {
    const {data} = await axios.get('/api/candies')
    dispatch(gotAllCandy(data))
  }
}

export const updateCandyQty = (id, quantity) => {
  return async (dispatch,getState) => {
    const {data} = await axios.put(`/api/candies/${id}`, {quantity})
    dispatch(updatedCandyQty(data))
    dispatch(getAllCandy())
  }
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_ALL_CANDY:
      return {...state, candies: action.candies}
    case GOT_ONE_CANDY:
        return {...state, oneCandy: action.candy}
    case UPDATED_CANDY_QTY:
      return {...state, oneCandy: emptyCandy}
    default:
      return state
  }
}

export default rootReducer
