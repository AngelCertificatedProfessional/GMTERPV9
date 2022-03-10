import { createTable } from './../../utils/Tabla';

const Tabla = ({
  listado,
  seleccionado,
  buscarRegistro,
  columnas,
  proceso,
  columnasIgnorar,
  bMostrarColumnaCheck,
  opcionCheck,
  opcionCheckGlobal,
  marcarTodos
}) => {
  return listado.length > 0 || columnas.length > 0
    ? createTable(listado, seleccionado, buscarRegistro, columnas, proceso,columnasIgnorar,bMostrarColumnaCheck,opcionCheck,opcionCheckGlobal,marcarTodos)
    : null;
};

export default Tabla;
