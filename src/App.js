
import './App.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import About from './components/Body/About/About';
import Package from './components/Body/Package/Package';
import Login from './components/Form/Login/Login';
import Register from './components/Form/Register/Register';
import AuthProvider from './contex/AuthProvider';
import Services from './components/Body/Services/Services';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Blog from './components/Body/Blog/Blog';
function App() {
  return (
    <div className="">
     {/* Cotext Api & React router used here */}
      <AuthProvider>
      <BrowserRouter>
      <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute path="/services">
          <Services></Services>
          </PrivateRoute>
          <PrivateRoute path="/blog">
          <Blog></Blog>
          </PrivateRoute>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/package">
            <Package></Package>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>

  
    </div>
  );
}

export default App;
