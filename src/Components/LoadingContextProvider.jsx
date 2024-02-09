import React, { createContext, useState } from 'react';
import "./styles/LoadingContextProvider.css";
export const LoadingContext = createContext();

const LoadingProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);

    return (
        <LoadingContext.Provider value={{ loading, setLoading }}>
            <div id="preloader-1" style={loading ? {} : { display: 'none' }}>
                <div className="preloader-1"></div>
            </div>

            {children}
        </LoadingContext.Provider>
    );
};

export default LoadingProvider;
