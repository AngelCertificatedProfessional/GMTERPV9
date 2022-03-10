import React from 'react';
import {capitalizeFirstLetter} from './UtileriasPagina'
const columnsToHide = [
  '_id',
];
import { Table } from 'react-bootstrap';

export const createTable = (
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
) => {
  if(columnasIgnorar !==undefined && columnasIgnorar.length > 0 ){
    columnsToHide.push(...columnasIgnorar)
  }
  if (listado.length === 0 || !Array.isArray(listado)) {
    return null;
  }
  return (
    <Table striped bordered hover responsive size="sm">
      <thead>
        <tr>
          {mapTableColumns(columnas, proceso)}
          {bMostrarColumnaCheck &&
                <th key="keyGlobal" scope="col">
                  {marcarTodos ?

                      <input type="checkbox" name="check" onClick={() => opcionCheckGlobal()} checked/>
                    :
                      <input type="checkbox" name="check" onClick={() => opcionCheckGlobal()}/>
                    }
                  </th>
              }
          </tr>
      </thead>
      <tbody>
        {listado.map((result, index) => {
          return (
            <tr
              onClick={() => buscarRegistro(result._id)}
              key={index}
              className={
                seleccionado === result._id
                  ? 'tablaSeleccionada'
                  : 'tablaNoSeleccionada'
              }
            >
              {addTableRow(result, columnas)}
              {bMostrarColumnaCheck &&
                <th key={"key"+result._id} scope="col">
                  {marcarTodos ?
                    <input type="checkbox" name="check" onClick={() => opcionCheck(result._id)} checked />
                  :
                    <input type="checkbox" name="check" onClick={() => opcionCheck(result._id)}/>
                  }
                </th>
              }
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export const mapTableColumns = (columnas, proceso) => {
  return columnas.map((col) => {
    if (!columnsToHide.includes(col)) {
      const overridedColumnName = sobreescribirColumnName(col, proceso);
      return (
        <th key={col} scope="col">
          {overridedColumnName}
        </th>
      );
    }
  });
};

export const addTableRow = (result, columns) => {
  let row = [];
  columns.forEach((col) => {
    if (!columnsToHide.includes(col)) {
      row.push(
        Object.keys(result).map((item) => {
          if (item === col) {
            if (typeof result[item] == 'boolean') {
              if (result[item]) {
                return 'Si';
              } else {
                return 'No';
              }
            } else if((typeof result[item] == 'number')){
              return result[item].toString();
            }else {
              return result[item];
            }
          }
        })
      );
      row = filtrarValores(row);
    }
  });
  return row.map((item) => {
    return <td>{item}</td>;
  });
};

const filtrarValores = (arr) => {
  return arr
    .map((val) =>
      val.map((deepVal) => deepVal).filter((deeperVal) => deeperVal)
    )
    .map((val) => {
      if (val.length < 1) {
        val = '';
        return val;
      }
      return val;
    });
};

export const crearArregloColumnas = (results) => {
  let columns = [];
  results.forEach((result) => {
    Object.keys(result).forEach((col) => {
      if (!columns.includes(col)) {
        columns.push(col);
      }
    });
  });
  return columns;
};

export const sobreescribirColumnName = (col, proceso) => {
  switch (proceso) {
    case 'Observacion':
      return observacionColumna(col);
    case 'Evento':
        return eventoColumna(col);
    case 'Usuario':
      return usuarioColumna(col);
    case 'EstructuraJSON':
      return estructuraJSONColumna(col);
  }
};

/* Se agrega seccion de columnas de tablas*/

const observacionColumna = (col) => {
  switch (col) {
    default:
      return capitalizeFirstLetter(col);
  }
};


const usuarioColumna = (col) => {
  switch (col) {
    default:
      return capitalizeFirstLetter(col);
  }
};

const eventoColumna = (col) => {
  switch (col) {
    default:
      return capitalizeFirstLetter(col);
  }
};

const estructuraJSONColumna = (col) => {
  switch (col) {
    default:
      return capitalizeFirstLetter(col);
  }
};