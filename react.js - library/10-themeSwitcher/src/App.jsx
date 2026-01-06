import { useEffect, useState } from "react";
import "./App.css";
import { ThemeProvider } from "./contexts/theme";
import ThemeButton from "./Components/Card/ThemeButton";
import Card from "./Components/Card/Card";

function App() {
  const [themeMode , setThemeMode] = useState('light')

  function darkTheme() {
    setThemeMode('dark')

  }function lightTheme() {
    setThemeMode('light')
  }


  // changing theme 
  useEffect( () => {
    document.querySelector('html').classList.remove('light', 'dark')

    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])
  

  return (
    <ThemeProvider value={{themeMode, darkTheme, lightTheme}}>
      <div className="flex flex-wrap min-h-fit items-center">
        <div className="w-full">

          <ThemeButton />
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4"></div>

          <div className="w-full max-w-sm mx-auto"></div>
          <Card />
        </div>

      </div>
    </ThemeProvider>
  );
} 

export default App;
