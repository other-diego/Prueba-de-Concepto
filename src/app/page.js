"use client";
import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import FilterListIcon from "@mui/icons-material/FilterList";
import TablePagination from "@mui/material/TablePagination";

const MiTabla = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const datos = [
    {
      nombre: "John",
      apellido: "Doe",
      email: "john.doe@example.com",
      productora: "XYZ Productions",
      coordinador: "Alice",
    },
    {
      nombre: "John",
      apellido: "Doe",
      email: "john.doe@example.com",
      productora: "XYZ Productions",
      coordinador: "Alice",
    },
    // Agrega más datos según sea necesario
  ];

  return (
    <>
      <div className="flex justify-between items-center mb-4 m-5 p-4">
        <Button
          startIcon={<FilterListIcon />}
          variant="outlined"
          onClick={() => console.log("Filtrar")}
        >
          Filtrar
        </Button>
        <Button
          startIcon={<AddIcon />}
          variant="outlined"
          onClick={() => console.log("Agregar RRPP")}
        >
          Agregar RRPP
        </Button>
      </div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell>Apellido</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Productora</TableCell>
              <TableCell>Coordinador</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {datos
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((fila, index) => (
                <TableRow key={index}>
                  <TableCell>{fila.nombre}</TableCell>
                  <TableCell>{fila.apellido}</TableCell>
                  <TableCell>{fila.email}</TableCell>
                  <TableCell>{fila.productora}</TableCell>
                  <TableCell>{fila.coordinador}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={datos.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </>
  );
};

export default MiTabla;
