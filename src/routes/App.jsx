import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from '../components/Generales/Layout';
import Home from './../containers/Home';
import Usuarios from './../containers/Usuarios';
import Login from './../containers/Login';
import Error404 from './../containers/Error404';

const App = () => {
  return (
    <HashRouter>
        <Layout>
            <Routes>
                <Route exact path="/" element={Home} />
                <Route exact path="/usuario" element={Usuarios} />
                <Route exact path="/login" element={<Login/>} />
                <Route element={Error404} />
            </Routes>
        </Layout>
    </HashRouter>
  );
};

export default App;
