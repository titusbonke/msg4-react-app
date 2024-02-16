import React, { createContext,useLayoutEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const InputContext = createContext();

function InputContextProvider({ children }) {
    const [InputValues, SetInputValues] = useState({});
    const location = useLocation();

    useLayoutEffect(() => {
      // Run your function here
      resetInputValues();
    //   console.log("Values Reseted.");
    }, [location]); // Re-run effect whenever location changes
  

    const SetInputValueChange = (id, value) => {
        // console.log(id,value)
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