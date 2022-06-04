import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Movies from './components/movies';
import MovieForm from './components/movieForm';
import Customers from './components/customers';
import Rentals from './components/rentals';
import NotFound from './components/notFound';
import NavBar from './components/navBar';
import LoginForm from './components/loginForm';
import RegisterForm from './components/registerForm';
import NewMovie from './components/movieForm';
import Logout from './components/logout';
import auth from './services/authService'
import logo from './logo.svg';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
  state = {} ;
  
 componentDidMount() {
  const user = auth.getCurrentUser();
  this.setState({user})
 }

 render() {
  return (
    <React.Fragment>
    <ToastContainer />
    <NavBar user={this.state.user} />
    <main className='container'>
    <Switch>
      <Route path="/register" component={RegisterForm} />
      <Route path="/login" component={LoginForm} />
      <Route path="/logout" component={Logout} />
      <Route path="/movies/:id" component={MovieForm} />
      <Route path="/movies/new" component={NewMovie} />
      <Route path="/movies" 
        render={props => <Movies {...props} user={this.state.user} /> }></Route>
      <Route path="/customers" component={Customers}></Route>
      <Route path="/rentals" component={Rentals}></Route>
      <Route path="/notFound" component={NotFound}></Route>
      <Redirect from="/" exact to="/movies" />
      <Redirect to="/notFound" />
      </Switch>
    </main>
    </React.Fragment>
  );
 }
}

export default App;
