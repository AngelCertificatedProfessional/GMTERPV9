import React from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';
import { Formik } from 'formik';
import * as yup from 'yup';
import { actualizarEspecifico } from '../../utils/ConexionAPI';
import swal from 'sweetalert';

const schema = yup.object({
  contrasena: yup
    .string()
    .required('La contraseña es requerido')
    .min(8, 'La Contrasena debe contener minimo 8 caracteres.'),
  validaContrasena: yup
    .string()
    .required('El valor de valida Contraseña es obligatorio')
    .oneOf([yup.ref('contrasena'), null], 'Las contraseñas no son iguales'),
});

const CambiarContrasenas = ({ usuario, actualizarListado, setAccion }) => {
  return (
    <Formik
      validationSchema={schema}
      onSubmit={(values, e) => {
        usuario.contrasena = values.contrasena;
        actualizarEspecifico('usuario/actualizarContrasena', usuario)
          .then(() => {
            swal({
              title: 'Usuario Modificado',
              text: 'Su contraseña se a modificado exitosamente',
              icon: 'success',
              button: 'OK',
            });
            actualizarListado();
          })
          .catch((error) => {
            swal({
              title: 'Error',
              text: error,
              icon: 'error',
              button: 'OK',
            });
          });
      }}
      initialValues={{
        contrasena: '',
        validaContrasena:''
      }}
      enableReinitialize
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
          <h1>Cambiar contraseña: {usuario.usuario}</h1>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Contraseña</Form.Label>
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
            <Form.Group as={Col}>
              <Form.Label>Valida Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Valida Contraseña"
                name="validaContrasena"
                id="validaContrasena"
                value={values.validaContrasena}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={
                  !!touched.validaContrasena && !!errors.validaContrasena
                }
              />
              <Form.Control.Feedback type="invalid">
                {errors.validaContrasena}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Form.Row className="float-right">
            <Button
              className="mr-2"
              onClick={() => setAccion(1)}
              variant="primary"
              type="button"
            >
              Cancelar
            </Button>
            <Button variant="primary" type="submit">
              Actualizar Contraseña
            </Button>
          </Form.Row>
        </Form>
      )}
    </Formik>
  );
};

export default CambiarContrasenas;
