import { createStore } from 'redux'

const initialState = {
  topic: '',
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_TOPIC':
      return {
        topic: action.topic,
      }
    default:
      return state
  }
}

const store = createStore(reducer)

export default store
