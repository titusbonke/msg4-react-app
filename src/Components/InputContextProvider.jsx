import React, { createContext, useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const InputContext = createContext();

function InputContextProvider({ children }) {
    const [InputValues, SetInputValues] = useState({});
    const navigate = useNavigate();

    const initialRoute = useMemo(() => navigate.pathname, [navigate]);

    useEffect(() => {
      const unsubscribe = navigate.subscribe((location) => {
        if (location.pathname !== initialRoute) {
          resetInputValues();
        }
      });
  
      return () => unsubscribe();
    }, [navigate, initialRoute]);
  

    const SetInputValueChange = (id, value) => {
        console.log(id,value)
        SetInputValues(prevState => ({
            ...prevState,
            [id]: value
        }));
    };

    const resetInputValues = () => {
        SetInputValues({});
    };

    return (
        <InputContext.Provider value={{ InputValues, SetInputValueChange, resetInputValues }} >
            {children}
        </InputContext.Provider>
    );
}

export default InputContextProvider;