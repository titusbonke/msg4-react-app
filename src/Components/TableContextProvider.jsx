import React, { createContext, useLayoutEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const TableContext = createContext();

function TableContextProvider({ children }) {
    const [CurrentPage, setCurrentPage] = useState(1);
    const [SortOrder, setSortOrder] = useState(0);
    const [SortField, setSortField] = useState("");
    const location = useLocation();

    useLayoutEffect(() => {
        setCurrentPage(1);
        setSortOrder(0)
        setSortField("")
    }, [location]); // Re-run effect whenever location changes


    return (
        <TableContext.Provider value={{ CurrentPage, setCurrentPage, SortOrder, setSortOrder, SortField, setSortField }} >
            {children}
        </TableContext.Provider>
    );
}

export default TableContextProvider;