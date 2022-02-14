import {useState, useEffect, createContext} from 'react'
//import { themes, ThemeContext } from './contexts/theme-context'
import { themes } from './contexts/theme-color'
import { fontSizes } from './contexts/font-sizes'
import PageWrapper from './components/PageWrapper'
import Test from './components/Test'
import './styles/style.css'

export const ThemeContext = createContext();
export const FontSizeContext = createContext();

function App() {
  //const [darkThemeMQ] = useState(window.matchMedia("(prefers-color-scheme: dark)"))
  const [currentTheme, setCurrentTheme] = useState(themes.light);

  const toggleTheme = () => {
    setCurrentTheme((prevCurrentTheme) =>
      prevCurrentTheme === themes.light ? themes.dark : themes.light
    )
  };

  /*const [counterGluk, setCounterGluk] = useState(0);

  const setGluk = () => {
    //setCurrentTheme(themes.gluk);
    setCounterGluk(counterGluk + 1)
  };

  useEffect(() => {
    console.log("!!!");
    setCurrentTheme(themes.gluk);
  },[counterGluk]);*/

  /*useEffect(() => {
    if (darkThemeMQ.matches) {
      //console.log("dark")
      setCurrentTheme(themes.dark)
    } else {
      //console.log("light")
      setCurrentTheme(themes.light)
    }

    console.log("darkThemeMQ.matches:");
    console.log(darkThemeMQ.matches)
  },[darkThemeMQ]);*/

  const [fontSize, setFontSize] = useState(fontSizes.medium);

  return (
    <div className="global">
      <FontSizeContext.Provider value={fontSize}>
        <ThemeContext.Provider value={{theme: currentTheme, toggle: toggleTheme}}>
          <div className="app">
            <fieldset>
              <button onClick={() => toggleTheme()}>Toggle</button>
              <button onClick={() => setCurrentTheme(themes.dark)}>dark</button>
              <button onClick={() => setCurrentTheme(themes.light)}>light</button>
              <button onClick={() => setCurrentTheme(themes.colored)}>colored</button>
              {/*<button onClick={setGluk}>&#129313;&nbsp;&nbsp;gluk {counterGluk}</button>*/}
            </fieldset>
            <fieldset>
              <button onClick={() => setFontSize(fontSizes.ultraBig)}>Font Size Ultra Big</button>
              <button onClick={() => setFontSize(fontSizes.big)}>Font Size Big</button>
              <button onClick={() => setFontSize(fontSizes.medium)}>Font Size Medium</button>
              <button onClick={() => setFontSize(fontSizes.small)}>Font Size Small</button>
              <button onClick={() => setFontSize(fontSizes.ultraSmall)}>Font Size Ultra Small</button>
            </fieldset>
            <PageWrapper/>
            <Test/>
          </div>
        </ThemeContext.Provider>
      </FontSizeContext.Provider>
    </div>
  );
}

export default App;
