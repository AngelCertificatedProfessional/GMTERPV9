import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Col, Row, Container } from 'react-bootstrap';
// import AppContext from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import initialState from '../utils/initialState';
import {b64_to_utf8} from './../utils/UtileriasPagina';
const LoginFormulario = lazy(() =>
  import('./../components/Usuario/LoginFormulario')
);

const Login = () => {
  // let navigate  = useNavigate();
  // const { state, agregarUsuario } = useContext(AppContext);
  const [usuarioTemp, setUsuario] = useState({ ...initialState.usuario });
  // let { usuario } = state;
  // useEffect(() => {
  //   if (usuario !== null && usuario !== undefined && usuario.usuario !== '') {
  //     ingresarSesion(usuario);
  //   }
  //   const usuarioSesionT = JSON.parse(b64_to_utf8(sessionStorage.getItem('usuario')));
  //   if (
  //     usuarioSesionT !== null &&
  //     usuarioSesionT !== undefined &&
  //     usuarioSesionT.usuario !== ''
  //   ) {
  //     ingresarSesion(usuario);
  //   }
  // }, []);

  const ingresarSesion = async (jsonUsuario) => {
    navigate('/');
    window.location.href = window.location.href;
  };

  return (
    <main className="fondo">
      <Container>
        <Row className="justify-content-md-center">
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
          <Col></Col>
        </Row>
      </Container>
    </main>
  );
};

export default Login;
