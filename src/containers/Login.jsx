import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Col, Row, Container,Card } from 'react-bootstrap';
// import AppContext from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import initialState from '../utils/initialState';
import {b64_to_utf8} from './../utils/UtileriasPagina';
import LOGIN_ALERTA from '@images/LOGIN_ALERTA.png'
import Image from 'react-bootstrap/Image'
const LoginFormulario = lazy(() =>
  import('./../components/Usuario/LoginFormulario')
);

const Login = () => {
  // let navigate  = useNavigate();
  // const { state, agregarUsuario } = useContext(AppContext);
  const [usuarioTemp, setUsuario] = useState({});
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
          <Col md={5}>
            <main className="mt-5 login colorf2f2f2">
              <Suspense fallback={<div>Loading...</div>}>
                <LoginFormulario
                  usuario={usuarioTemp}
                  ingresarSesion={ingresarSesion}
                />
              </Suspense>
            </main>
          </Col>
          <Col md={7}>
            <Card
              style={{ width: '100%' }}
              className="shadow Secondary mt-5 colorf2f2f2"
              text={'black'}
              >
                <Card.Body>
                  <Col>
                    <Image src={LOGIN_ALERTA}/>
                    <Card.Text className="mtop-0 mbot-0 informacionAdicional">
                      El próximo domingo 9 de marzo del 2014 a partir de las 1:00 horas hasta las 5:00 horas, el servicio de gm transport software estará fuera de servicio por cuestiones de mantenimiento y actualización; por lo cual le pedimos que tomen sus precauciones. 
                      {/* {evento.descripcion} */}
                    </Card.Text>
                  </Col>
                </Card.Body>
              </Card>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          
        </Row>
      </Container>
    </main>
  );
};

export default Login;
