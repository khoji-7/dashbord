import React, { useState } from 'react';
import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import TableThree from '../components/Tables/TableThree';
import TableTwo from '../components/Tables/TableTwo';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Tables = () => {
  // State for current page
  const [currentPage, setCurrentPage] = useState(1);

  // Tables array for dynamic rendering
  const tables = [<TableTwo key="1" />, <TableThree key="2" />];

  return (
    <>
      <Breadcrumb pageName="Tables" />

      {/* Render the current table based on the page */}
      <div className="flex flex-col gap-10">{tables[currentPage - 1]}</div>

      {/* Pagination Component */}
      <div className="mt-8 flex justify-center">
        <Stack spacing={2}>
          <Pagination
            count={tables.length}
            page={currentPage}
            onChange={(e, value) => setCurrentPage(value)}
            color="primary"
          />
        </Stack>
      </div>
    </>
  );
};

export default Tables;
