import React from 'react';
import {BreowserRouters, Routes, Route} from 'react-router-dom'
import HomePage from './components/HomePage';
import EventPage from './components/EventPage';
import Review from './components/Review';


function AppRouter() {
  return (
    <BreowserRouters>

      <Routes>
        <Route path='/home' element ={
          <HomePage/>
        }/>
        <Route path='/events' element ={
          <EventPage/>
        }/>
        <Route path='/reviews' element ={
          <Review/>
        }/>


      </Routes>
    
    </BreowserRouters>
  );
}

export default AppRouter;
