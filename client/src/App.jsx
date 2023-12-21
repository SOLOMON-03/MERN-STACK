import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Booking from './pages/Booking';
import SignIn from './pages/Signin';
import SignUp from './pages/SignUp';
import Header from './components/Header';
import React from 'react';
import Footer from './components/Footer';
import Profile from './pages/Profile';
import PrivateRoute from './components/PrivateRoute';
import CreateListing from './pages/CreateListing';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='booking' element={<Booking />} />
        <Route path='sign-in' element={<SignIn />} />
        <Route path='sign-up' element={<SignUp />} />
        <Route element={<PrivateRoute />}>
          <Route path='profile' element={<Profile />} />
          <Route path='create-listing' element={<CreateListing />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

