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
        <Route exact path="/home" render={() => {
          return <>
            <Home/>
          </>
        }}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/" component={Home}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
