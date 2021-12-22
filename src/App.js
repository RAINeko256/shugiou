/** @jsxImportSource @emotion/react */

import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Provider } from 'react-redux'
import store from './store/index'

import Top from './pages/top/Top'
import Battle from './pages/battle/Battle'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Top />} />
          <Route path="/battle" element={<Battle />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
