import './App.css';

import DataProvider from './context/DataProvider';
//components

import { BrowserRouter, Routes, Route, Outlet, Navigate } from 'react-router-dom'

import Login from './components/account/Login';
import Home from './components/home/Home';
import Header from './components/header/Header';
import { useState } from 'react';
import CreatePost from './components/create/CreatePost';
import DetailView from './components/details/DetailView';

const PrivateRoute = ({ isAuthenticated, ...props }) => {
  return isAuthenticated ? 
    <>
      <Header />
      <Outlet /> 
    </> : 
    <Navigate replace to='/login' />
}

function App() {
 
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <DataProvider>
      <BrowserRouter>
        <div style ={{ marginTop: 64}}>
          <Routes >
              <Route path='/login' element={<Login setAuthenticated={setIsAuthenticated}/>} />

              <Route path='/' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
                <Route path='/' element={<Home />} />
              </Route>

              <Route path='/create' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
                <Route path='/create' element={<CreatePost />} />
              </Route>

              <Route path='/details/:id' element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
                <Route path='/details/:id' element={<DetailView />}/>
              </Route>

          </Routes>
        </div> 
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
