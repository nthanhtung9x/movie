import React from 'react';
import Header from './components/Layout/Headers/Header';
import { BrowserRouter, Route  } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Profile from './pages/Profile/Profile';
import DemoHOC from './components/HOC/DemoHOC';
import { HomeTemplate } from './templates/HomeTemplate/HomeTemplate';
import { AdminTemplate } from './templates/AdminTemplate/AdminTemplate';

function App() {
  return (
    <BrowserRouter>
      <div>
        <HomeTemplate exact path="/profile" Component={Profile}/>
        <HomeTemplate exact path="/register" Component={Register}/>
        <HomeTemplate exact path="/login" Component={Login}/>
        <HomeTemplate exact path="/home" Component={Home}/>

        <AdminTemplate exact path="/admin" Component={Home}/>

        <HomeTemplate exact path="/" Component={Home}/>
        {/* <Header/>
        <Route exact path="/home" render={(props) => {
          return <>
            <Home {...props}/>
          </>
        }}/>
        <Route exact path="/profile" render={(props) => {
          return <Profile {...props}/>
        }}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/hoc" component={DemoHOC}/>
        <Route exact path="/" component={Home}/> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
