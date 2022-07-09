import React, { Component } from 'react';
import { Route, Routes } from "react-router-dom";
import NavBar from './components/nav/NavBar';
import SideNav from './components/nav/SideNav';

import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';

class App extends Component {
  render() {
    return (
      <>
        <div className='flex flex-col'>
          <NavBar />
          <div className='flex flex-row'>
            <SideNav />
            <div className='ml-80 mt-24 pagecontainer'>
              <Routes>
                <Route path='/' element={<HomePage />} exact />
                <Route path='/about' element={<AboutPage />} />
                <Route path='/*' element={<NotFoundPage />} />
              </Routes>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
