import React, { createContext, useState } from 'react';
import "./styles/LoadingContextProvider.css";
export const LoadingContext = createContext();

const LoadingProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);

    return (
        <LoadingContext.Provider value={{ loading, setLoading }}>
            <div className="preloader-4" style={loading ? {} : { display: 'none' }}>
                <div className="fading-circle">
                    <div className="circle1 circle"></div>
                    <div className="circle2 circle"></div>
                    <div className="circle3 circle"></div>
                    <div className="circle4 circle"></div>
                    <div className="circle5 circle"></div>
                    <div className="circle6 circle"></div>
                    <div className="circle7 circle"></div>
                    <div className="circle8 circle"></div>
                    <div className="circle9 circle"></div>
                    <div className="circle10 circle"></div>
                    <div className="circle11 circle"></div>
                    <div className="circle12 circle"></div>
                </div>
            </div>

            {children}
        </LoadingContext.Provider>
    );
};

export default LoadingProvider;
