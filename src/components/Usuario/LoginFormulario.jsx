import React from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';
import { Formik } from 'formik';
import * as yup from 'yup';
import { iniciarSesion } from '../../utils/ConexionAPI';
import swal from 'sweetalert';

const schema = yup.object({
  usuario: yup.string().required('El usuario es requerido'),
  contrasena: yup.string().required('La contraseña es requerida'),
});

const LoginFormulario = ({ usuario, ingresarSesion }) => {
  return (
    <Formik
      initialValues={{
        usuario: usuario.usuario,
        contrasena: usuario.contrasena,
      }}
      validationSchema={schema}
      onSubmit={(values, e) => {
        usuario.usuario = values.usuario;
        usuario.contrasena = values.contrasena;
        iniciarSesion('usuario/iniciarSecion', usuario)
          .then((jsonUsuario) => {
            ingresarSesion(jsonUsuario);
          })
          .catch((error) => {
            console.log(error)
            swal({
              title: 'Error',
              text: error,
              icon: 'error',
              button: 'OK',
            });
          });
      }}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
      }) => (
        <Form
          className="informacionUniversidad"
          onSubmit={handleSubmit}
          noValidate
        >
          <h2 className="tituloCentrado">INICIO DE SESIÓN</h2>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Control
                placeholder="Empresa"
                name="empresa"
                id="empresa"
                value={values.empresa}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={!!touched.empresa && !!errors.empresa}
              />
              <Form.Control.Feedback type="invalid">
                {errors.empresa}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Control
                placeholder="Usuario"
                name="usuario"
                id="usuario"
                value={values.usuario}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={!!touched.usuario && !!errors.usuario}
              />
              <Form.Control.Feedback type="invalid">
                {errors.usuario}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Control
                type="password"
                placeholder="Contraseña"
                name="contrasena"
                id="contrasena"
                value={values.contrasena}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={!!touched.contrasena && !!errors.contrasena}
              />
              <Form.Control.Feedback type="invalid">
                {errors.contrasena}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row align="end">
            <Button className="ph-3 colorff961b" variant="primary" type="submit">
              Ingresar
            </Button>
          </Row>
        </Form>
      )}
    </Formik>
  );
};

export default LoginFormulario;
