import React from "react";
import NewYear from "../components/Timers/new-year";
import Firework from "../components/firework/firework";
import '../styles/btn.scss';
import ts from './timer.module.scss';
import NoCounterSelected from "../components/Timers/no-counter-selected";
import ProjectStart from "../components/Timers/project-start";

export default function Timers() {
    document.title = "Timers";
    const [content, setContent] = React.useState(0);
    const page: JSX.Element[] = [
        <div><NoCounterSelected/></div>,
        <div><NewYear /><Firework /></div>,
        <div><ProjectStart/></div>,
    ];
    return (
        <>
            <div className={ts.container}>
                <ul>
                    <li 
                    className="btn"
                    onClick={() => setContent(1)}
                    >
                    New-Year Count Down
                    </li>
                    <li
                    className="btn"
                    onClick={() => setContent(2)}
                    >
                        Project Start
                    </li>
                </ul>
            </div>

            <div>
                {page[content]}
            </div>
        </>
    )
}

