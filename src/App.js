/** @jsxImportSource @emotion/react */

import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Top from "./pages/top/Top"
import Battle from "./pages/battle/Battle"

const TopicContext = React.createContext({topic:'',setTopic:()=>{}})
function App() {
  return (
    /**<Top/>*/
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Top />} />
        <Route path="/battle" element={<Battle />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
