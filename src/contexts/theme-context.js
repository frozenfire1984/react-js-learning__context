import {createContext} from 'react';

export const themes = {
    light: {
        background: 'white',
        textColor: 'black',
    },
    dark: {
        background: 'black',
        textColor: 'white',
    },
}

export const ThemeContext = createContext(themes.light); //variant without togglers inside nested components; more easy way

/*export const ThemeContext = createContext({
    theme: themes.light,
    toggleTheme: () => {},
});*/
