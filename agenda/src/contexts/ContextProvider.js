import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

export const ContextProvider = ({ children }) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(true);
    const [login, setLogin] = useState(true);
    
    return (
        <StateContext.Provider value={{ username, setUsername, password, setPassword, isAuthenticated, setIsAuthenticated, login, setLogin }}>
        {children}
        </StateContext.Provider>
    );
};

export const useStateContext = () => useContext(StateContext);