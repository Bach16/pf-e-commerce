import { useState } from "react";
import { Box, Button, Grid } from "@mui/material";
import { useRouter } from "next/router";

interface Props {
  itemsPerPage: number; // El número de ítems que se mostrarán por página
  totalItems: number; // El número total de ítems que se mostrarán en todas las páginas
}

const Pagination = ({ itemsPerPage, totalItems }: Props) => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState<number>(1); // El estado que almacena la página actual

  const handlePageChange = (pageNumber: number) => {
    // Función para cambiar a una página en particular
    setCurrentPage(pageNumber); // Actualiza el estado de la página actual
    router.push(`/?page=${pageNumber}`); // Navega a la página correspondiente en la URL
  };

  const renderPageNumbers = () => {
    // Función que renderiza los números de página en los botones
    const pageNumbers = [];
    const totalPages = Math.ceil(totalItems / itemsPerPage); // Calcula el número total de páginas que se necesitan

    for (let i = 1; i <= totalPages; i++) {
      // Itera sobre el número de páginas y crea un botón para cada una
      pageNumbers.push(
        <Button
          key={i}
          variant={currentPage === i ? "contained" : "outlined"} // Si el botón representa la página actual, se muestra como "contained", de lo contrario, se muestra como "outlined"
          onClick={() => handlePageChange(i)} // Cuando se hace clic en el botón, cambia a la página correspondiente
          color="primary" // Establece el color del botón
        >
          {i}
          {/*  El número de la página que representa el botón */}
        </Button>
      );
    }

    return pageNumbers; // Devuelve el arreglo de botones
  };

  return (
    <Box mt={4} display="flex" justifyContent="center" alignItems="center">
      <Grid container spacing={2}>
        {renderPageNumbers()}
        {/*  Renderiza los botones de la paginación */}
      </Grid>
    </Box>
  );
};

export default Pagination;
