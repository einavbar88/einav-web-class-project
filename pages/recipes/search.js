import React from 'react'
import Header from '../../components/header/Header'
import ContextProvider from '../../context/Context'

export default function search() {
    return (
        <ContextProvider>
            <Header />
        </ContextProvider>
    )
}
