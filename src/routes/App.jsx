import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Layout from '../components/Generales/Layout';
import Home from './../containers/Home';
import Usuario from './../containers/Usuario';
import Login from './../containers/Login';
import Error404 from './../containers/Error404';

const App = () => {
  return (
    <HashRouter>
        <Layout>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/usuario" component={Usuario} />
                <Route exact path="/login" component={Login} />
                <Route component={Error404} />
            </Switch>
        </Layout>
    </HashRouter>
  );
};

export default App;
