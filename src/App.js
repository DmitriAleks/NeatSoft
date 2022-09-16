import './App.css';
import React, { createContext, useEffect, useState } from 'react';
import { Main } from './routes/main/Main';
import {DATA_THEME, STORAGE_THEME_KEY} from './common/constants/constants';

export const ThemeContext = createContext('default');

function App() {
    const [theme, setTheme] = useState(localStorage.getItem(STORAGE_THEME_KEY));
    useEffect(() => {
        document.body.setAttribute(DATA_THEME, theme);
    }, []);
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    const themeControl = {
        themeName: theme,
        changeTheme: (t) => {
            setTheme(t);
        },
    };
    return (
        <ThemeContext.Provider value={themeControl}>
            <Main />
        </ThemeContext.Provider>
    );
}
export default App;
