import React, { useState, useEffect, useContext, lazy, Suspense } from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import AppContext from '../context/AppContext';
import { useHistory, withRouter } from 'react-router-dom';
import initialState from '../utils/initialState';
import {b64_to_utf8} from './../utils/UtileriasPagina';
const LoginFormulario = lazy(() =>
  import('./../components/Usuario/LoginFormulario')
);

const Login = () => {
  let history = useHistory();
  const { state, agregarUsuario } = useContext(AppContext);
  const [usuarioTemp, setUsuario] = useState({ ...initialState.usuario });
  let { usuario } = state;
  useEffect(() => {
    if (usuario !== null && usuario !== undefined && usuario.usuario !== '') {
      ingresarSesion(usuario);
    }
    const usuarioSesionT = JSON.parse(b64_to_utf8(sessionStorage.getItem('usuario')));
    if (
      usuarioSesionT !== null &&
      usuarioSesionT !== undefined &&
      usuarioSesionT.usuario !== ''
    ) {
      ingresarSesion(usuario);
    }
  }, []);

  const ingresarSesion = async (jsonUsuario) => {
    agregarUsuario(jsonUsuario);
    history.push('/');
    window.location.href = window.location.href;
  };

  return (
    <main className="fondo">
      <Container fluid>
        <Row>
          <Col></Col>
          <Col className="login__formulario">
            <main className="mt-5 login">
              <Suspense fallback={<div>Loading...</div>}>
                <LoginFormulario
                  usuario={usuarioTemp}
                  ingresarSesion={ingresarSesion}
                />
              </Suspense>
            </main>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default withRouter(Login);
