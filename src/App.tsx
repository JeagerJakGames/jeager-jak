import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Layout from './components/layout';
import Contact from './pages/contact';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Timers from './pages/Timers';
import ToDo from './pages/ToDo';

// get system dark preference
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

export type ThemeContextType = {
  theme: string;
  toggleTheme: () => void;
};



export const ThemeContext = React.createContext<ThemeContextType>({theme:'', toggleTheme: () => {}});// need this to access the context in the child components


export default function App() {
  const startingTheme = prefersDarkScheme ? 'dark' : '';
  const [theme, setTheme] = React.useState(startingTheme);
  const toggleTheme = () => {
    setTheme(theme === '' ? 'dark' : '');
  };

  const themeValues = { theme, toggleTheme };
  return (
    <>
      <ThemeContext.Provider value={themeValues}>{/* need this to access the context in the child components */}
        <div className={theme == 'dark' ? 'dark-theme' : 'light-theme'}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="todo" element={<ToDo/>}/>
              <Route path="/contact" element={<Contact />} />
              <Route path="/Timers" element={<Timers />} />
              <Route path="*" element={<ErrorPage />} />
            </Route>
          </Routes>
        </div>
      </ThemeContext.Provider>
    </>
  )
}


