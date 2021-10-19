import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import Header from '../Components/Header/Header';
import Home from '../Pages/Home';
import Login from '../Pages/Login/Login';
import Footer from '../Components/Footer/Footer';
import Registration from '../Pages/Registration/Registration';
import PrivateRoute from './PrivateRoute';
import Profile from '../Components/Profile/Profile';
import Details from '../Components/Details/Details';
import NotFound from '../Components/notFound/NotFound';
export default function RouterNav() {
    return (
        <Router>
            <Header></Header>
            <Switch>
                <Route exact path='/'>
                    <Home></Home>
                </Route>
                <Route exact path='/registration'>
                    <Registration></Registration>
                </Route>
                <Route exact path='/login'>
                    <Login></Login>
                </Route>
                <PrivateRoute exact path='/profile'>
                    <Profile></Profile>
                </PrivateRoute>
                <PrivateRoute exact path='/services/details/:id'>
                    <Details></Details>
                </PrivateRoute>
                <Route path='*'>
                    <NotFound></NotFound>
                </Route>
            </Switch>
            <Footer></Footer>
        </Router>
    )
}
