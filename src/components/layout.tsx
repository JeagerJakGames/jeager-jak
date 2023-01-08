import React from "react";
import Footer from "./footer/footer";
import Nav from "./nav/nav";
import { Outlet, useOutletContext } from 'react-router-dom';
import { HomeProps } from "../pages/Home";

// create component
export default function Layout(props: any) {
    //get system dark mode preference
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [isDarkMode, setIsDarkMode] = React.useState(prefersDarkMode)
    return (
        <>
            <div className="page-container">
                <Nav isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
                <div className="page-body">
                    <Outlet context={[isDarkMode,setIsDarkMode]} />
                </div>
                <Footer />
            </div>
        </>
    )
}

type Context = {
    isDarkMode: boolean;
    setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

export function useContext (){
    return useOutletContext<Context>();
};
