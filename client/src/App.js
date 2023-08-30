import { useState } from 'react';

import Login from './Components/account/Login';
import { BrowserRouter, Routes, Route, Outlet, Navigate } from 'react-router-dom'
import DataProvider from './context/DataProvider';
import Home from './Components/Home/Home';
import Header from './Components/header/Header';
import About from './Components/about/about';
import Contact from './Components/contact/contact';
import Progress from './Components/progress/Progress';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

// import Progress from './Components/progress/progress';
import Course from './Components/course/Course';

const PrivateRoute = ({ isAuthenticated, ...props }) => {
  return isAuthenticated ?
    <>
      <Header />
      <Outlet />
    </> : <Navigate replace to='/login' />
};

function App() {

  const [isAuthenticated, isUserAuthenticated] = useState(false);

  return (
    <div style={{ marginTop: 64 }}>
      <BrowserRouter>
        <DataProvider>
          <Routes>
            <Route path='/login' element={<Login isUserAuthenticated={isUserAuthenticated} />} />

            <Route path='/' element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
              <Route path='/' element={<Home />} />
            </Route>
            <Route path='/about' element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
              <Route path='/about' element={<About />} />
            </Route>
            <Route path='/contact' element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
              <Route path='/contact' element={<Contact />} />
            </Route>
            <Route path='/course' element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
              <Route path='/course' element={<Course/>} />
            </Route>
            <Route path='/progress' element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
              <Route path='/progress' element={<Progress />} />
            </Route>

          </Routes>
        </DataProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
