import React from 'react';
import './App.scss';
import 'bootstrap/scss/bootstrap.scss';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Details from './components/DetailPage/Details';
import Wishlist from './components/Wishlist/Wishlist';

export default function App() {
    const navRoutes = [
        { title: 'Detail', path: 'detail/:movieId', element: <Details /> },
        { title: 'Wishlist', path: 'wishlist', element: <Wishlist /> },
        { title: 'Ana Sayfa', path: '/', element: <Home />, isNav: true, isExact: true }
    ];

    return (
        <>
            <Navbar />
            <div className="container-fluid">
                <Routes>
                    {navRoutes.map((item, index) => (<Route exact={item.isExact} key={index} path={item.path} element={item.element}></Route>))}
                </Routes>
            </div>
        </>
    );
}
