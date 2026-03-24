import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Explore from './pages/Explore.jsx'
import IdeaDetail from './pages/IdeaDetail.jsx'
import Register from './pages/Register.jsx'
import Payment from './pages/Payment.jsx'
import PaymentComplete from './pages/PaymentComplete.jsx'
import Auth from './pages/Auth.jsx'
import MyPage from './pages/MyPage.jsx'
import Invest from './pages/Invest.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/idea/:id" element={<IdeaDetail />} />
        <Route path="/register" element={<Register />} />
        <Route path="/payment/:id" element={<Payment />} />
        <Route path="/payment/complete" element={<PaymentComplete />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/my" element={<MyPage />} />
        <Route path="/invest" element={<Invest />} />
      </Routes>
    </BrowserRouter>
  )
}
