import React, { useState, useEffect } from 'react'


export const Context = React.createContext()

const ContextProvider = (props) => {
   
    const [windowSize, setWindowSize] = useState(undefined);
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const serverUrl = 'http://www.google.com'

    const useWindowSize = () => {
        useEffect(() => {
            function handleResize() {
                setWindowSize(window.innerWidth);
            }
            window.addEventListener("resize", handleResize);
            handleResize();
            return () => window.removeEventListener("resize", handleResize);
        }, []);
        return windowSize
    }
    useWindowSize()

    return (
        <Context.Provider value={{
            windowSize, serverUrl,
            isMenuOpen, setIsMenuOpen
        }}>
            {props.children}
        </Context.Provider>
    )
}


export default ContextProvider