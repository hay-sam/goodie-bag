import axios from "axios"
const initialState = {
  candies: []
}

const GOT_ALL_CANDY = "GOT_ALL_CANDY"

const gotAllCandy = (candy) => {
  return {
    type: GOT_ALL_CANDY,
    candy
  }
}

export const getAllCandy = () => {
  return async (dispatch,getState) => {
    const {data} = await axios.get("/api/candies")
    dispatch(gotAllCandy(data))
  }
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_ALL_CANDY:
      return {candies: action.candy}
    default:
      return state
  }
}

export default rootReducer
