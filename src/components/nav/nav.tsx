import React from "react";
import { Link } from "react-router-dom";
import { ThemeContext, ThemeContextType } from "../../App";
import DarkMode from "../Inputs/darkMode";
import "./nav.scss";

export interface NavProps {
    isDarkMode: boolean;
    setIsDarkMode: (isDarkMode: boolean) => void;
}
export default function Nav(props: NavProps) {
    const {theme, toggleTheme} = React.useContext<ThemeContextType>(ThemeContext);

    const isDarkMode = theme != '' ? true : false;

    return (
        <>
            <header>
                <nav className="nav">
                    <section>
                        <h1>Jeager Jak Games</h1>
                    </section>
                    <section>
                        <div className="dark-mode-text">
                            <h1>{isDarkMode ? "DarkMode: " : "LightMode: "}</h1>
                        </div>
                        <DarkMode isDarkMode={isDarkMode} setIsDarkMode={toggleTheme} />
                        <ul
                        className={isDarkMode ? "dark-header-ul" : "light-header-ul"}
                        >
                            <li><Link to='/'>Home</Link></li>
                            {/* <li><Link to='/contact'>Contact</Link></li> */}
                            <li><Link to='/todo'>ToDo</Link></li>
                            <li><Link to='/Timers'>Timers</Link></li>
                        </ul>
                    </section>
                </nav>
            </header>
        </>
    )
}