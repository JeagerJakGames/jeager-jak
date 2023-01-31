import React from 'react';
import ImageSlider from '../components/image-slider';
import Loader from '../components/loader/loader';
import rimImage from '../images/Rimuru.png';
import gif from '../images/Screech.gif';
import { useContext } from '../components/layout';
import { ThemeContext, ThemeContextType } from '../App';

export interface HomeProps {
    isDarkMode?: boolean;
    setIsDarkMode?: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Home() {
    const {theme, toggleTheme} = React.useContext<ThemeContextType>(ThemeContext);

    const isDarkMode = theme != '' ? true : false;

    const imgs: string[] = [rimImage,gif];
    document.title = 'Home';
    return (
        <>
            <section>
                <ImageSlider isDarkMode={isDarkMode} images={imgs} />
            </section>
            <section>
                <div>
                    <Loader />
                </div>
            </section>
            <section>
                <h2>{isDarkMode ? 'DARK' : 'LIGHT'} Mode</h2>
            </section>

        </>
    )
}