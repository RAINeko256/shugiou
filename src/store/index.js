import { combineReducers, createStore } from 'redux'

import mqtt from 'mqtt-browser'

const topicReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_TOPIC':
      return action.topic
    default:
      return state
  }
}

const MQTTOptions = {
  port: process.env.REACT_APP_WSPORT,
  username: process.env.REACT_APP_USERNAME,
  password: process.env.REACT_APP_PASSWORD,
}

const initialMqttClient = mqtt.connect(
  'wss://driver.cloudmqtt.com',
  MQTTOptions
)
console.log('connect in store')

const mqttClientReducer = (state = initialMqttClient, action) => {
  switch (action.type) {
    case 'SET_MQTT_CLIENT':
      return action.mqttClient
    default:
      return state
  }
}

const default_name = '対戦者を待っています...'
const initialPlayerName = {
  nameA: default_name,
  pointA: 0,
  nameB: default_name,
  pointB: 0,
}

const playerReducer = (state = initialPlayerName, action) => {
  switch (action.type) {
    case 'SET_PLAYER_DATA':
      if (state.nameA === default_name) {
        console.log(action)
        console.log(action.name)
        return Object.assign({}, state, {
          nameA: action.name,
          pointA: action.point,
        })
      } else if (state.nameA === action.name) {
        return Object.assign({}, state, {
          pointA: action.point,
        })
      } else if (state.nameB === default_name) {
        return Object.assign({}, state, {
          nameB: action.name,
          pointB: action.point,
        })
      } else if (state.nameB === action.name) {
        return Object.assign({}, state, {
          pointB: action.point,
        })
      } else {
        console.log('第三者')
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  topicReducer,
  mqttClientReducer,
  playerReducer,
})

const store = createStore(rootReducer)

export default store
