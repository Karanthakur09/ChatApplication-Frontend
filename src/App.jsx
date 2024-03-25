import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"

const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Chat = lazy(() => import("./pages/Chat"));
const Groups = lazy(() => import("./pages/Groups"));
// const NotFound = lazy(() => import("./pages/NotFound"));
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <Suspense fallback="Loading....">
            <Home />
          </Suspense>
        } />
        <Route path='/about' element={<h1>V</h1>} />
        <Route path='/groups' element={<h1>V</h1>} />
        <Route path='/login' element={<Login />} />
        <Route path='/chat/:chatId' element={<h1>V</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App