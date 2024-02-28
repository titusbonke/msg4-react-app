import React, { createContext, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const TableContext = createContext();

function TableContextProvider({ children }) {
    const [CurrentPage, setCurrentPage] = useState(1);
    const [SortOrder, setSortOrder] = useState(0);
    const [SortField, setSortField] = useState("");
    return (
        <TableContext.Provider value={{ CurrentPage,setCurrentPage,SortOrder,setSortOrder,SortField,setSortField}} >
            {children}
        </TableContext.Provider>
    );
}

export default TableContextProvider;