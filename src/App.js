
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';

import React, { useEffect, useState } from "react";







        const App = (props) => {
            const loadDataOnlyOnce = () => {
                $(window).load(function () {
                    setTimeout(function () {
                        $('.preloader')('slow');
                    }, 9000);

                });


            }
    return (
        <>
            <Router>
                <Navbar />
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/services' component={Services} />
                    <Route path='/products' component={Products} />
                    <Route path='/sign-up' component={SignUp} />
                </Switch>
            </Router>
        </>
    );
}
// function $(window) {
//
// }
//
// $(window).load(function () {
//     setTimeout(function () {
//         $('.preloader')('slow');
//     }, 9000);
//
// });
    // This function will called only once

export default App;