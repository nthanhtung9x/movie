import React from 'react';
import Header from './components/Layout/Headers/Header';
import { BrowserRouter, Route  } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header/>
        <Route path="/home" component={Home}/>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
