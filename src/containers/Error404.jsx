import React, { useEffect } from 'react';
// import AppContext from '../context/AppContext';
// import { useNavigate, useLocation } from 'react-router-dom';
// import {b64_to_utf8} from './../utils/UtileriasPagina';

const FatalError = () => {
  // const { state, agregarUsuario } = useContext(AppContext);
  // let navigate  = useNavigate();
  // const location = useLocation();
  // useEffect(() => {
  //   const { usuario } = state;
  //   if (usuario === null || usuario === undefined || usuario.usuario === '') {
  //     const usuarioSesionT = JSON.parse(b64_to_utf8(sessionStorage.getItem('usuario')));
  //     if (
  //       (usuarioSesionT === null ||
  //         usuarioSesionT === undefined ||
  //         usuarioSesionT.usuario === '') &&
  //       location.pathname !== '/login'
  //     ) {
  //       navigate('/login');
  //     }
  //     agregarUsuario(usuarioSesionT);
  //   }
  // }, []);

  return (
    <div className="text-center">
      <h1 className="Error_Text">
        Error: 404 No se encontro la pagina solictada
      </h1>
    </div>
  );
};

export default FatalError;
