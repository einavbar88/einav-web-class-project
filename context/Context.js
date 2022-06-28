import React, { useState, useEffect } from 'react'


export const Context = React.createContext()

const ContextProvider = (props) => {
   
    const [windowSize, setWindowSize] = useState(undefined);
    const [location, setLocation] = useState('')
    const [isMenuOpen, setIsMenuOpen] = useState(false)
 
    useEffect(() => {
        setLocation(window.location.pathname)
      }, [location, setLocation])

      useEffect(() => {
        if(windowSize > 800){
            setIsMenuOpen(false)
        }
      }, [windowSize])

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
            windowSize,
            location,
            isMenuOpen, setIsMenuOpen
        }}>
            {props.children}
        </Context.Provider>
    )
}


export default ContextProvider