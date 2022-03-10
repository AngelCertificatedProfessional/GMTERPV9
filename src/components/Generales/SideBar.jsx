import React from 'react';
import { Button } from 'react-bootstrap';
import Tabla from './Tabla';

const SideBar = ({
  cambiarVentana,
  listado,
  seleccionado,
  buscarRegistro,
  columnas,
  proceso,
  columnasIgnorar,
  bMostrarColumnaCheck,
  opcionCheck = null,
  opcionCheckGlobal = null,
  marcarTodos
}) => {
  return (
    <aside className="aside__titulo">
      <h3 className="text-dark text-center">{proceso}</h3>

      <div className="d-grid gap-2">
          <Button
            variant="primary"
            block="true"
            onClick={() => cambiarVentana(2)}
          >
            Agregar
          </Button>
        </div>

      <Tabla
        listado={listado}
        seleccionado={seleccionado}
        buscarRegistro={buscarRegistro}
        columnas={columnas}
        proceso={proceso}
        columnasIgnorar={columnasIgnorar}
        bMostrarColumnaCheck={bMostrarColumnaCheck}
        opcionCheck={opcionCheck}
        opcionCheckGlobal = {opcionCheckGlobal}
        marcarTodos = {marcarTodos}
      />
        
    </aside>
  );
};

export default SideBar;
