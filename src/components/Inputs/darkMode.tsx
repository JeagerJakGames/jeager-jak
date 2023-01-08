import '../../styles/star.scss';
export interface DarkModeProps {
    isDarkMode: boolean;
    setIsDarkMode: (isDarkMode: boolean) => void;
}

export default function DarkMode(props: DarkModeProps) {
    const { isDarkMode, setIsDarkMode } = props;
    const color = isDarkMode ? "white" : "black";

    return (
        <>
        <div className='center-single-content'>
                <div className='star-container'>
                    <div className={isDarkMode ? 'star-dark' : 'star'} onClick={() => setIsDarkMode(!isDarkMode)}></div>
                </div>
            </div>
            {/* <div className="dark-mode">
                <button onClick={() => setIsDarkMode(!isDarkMode)}>
                    {isDarkMode
                        ? <svg xmlns="http://www.w3.org/2000/svg" fill={color} height="48" width="48"><path d="M24.05 46.55 17.3 40H8v-9.3L1.3 24 8 17.3V8h9.3l6.75-6.7L30.7 8H40v9.3l6.7 6.7-6.7 6.7V40h-9.3ZM24 23.95Zm.05 18.4 5.4-5.35H37v-7.55L42.45 24 37 18.55V11h-7.55l-5.4-5.45-5.5 5.45H11v7.55L5.55 24 11 29.45V37h7.5Zm-.1-5.35q5.55 0 9.3-3.775Q37 29.45 37 23.95t-3.775-9.275Q29.45 10.9 23.95 10.9q-1.35 0-2.6.275t-2.7.925q3.45 1.6 5.55 4.8 2.1 3.2 2.1 7.05 0 3.85-2.1 7.05-2.1 3.2-5.55 4.85 1.2.55 2.525.85 1.325.3 2.775.3Z" /></svg>
                        : <svg xmlns="http://www.w3.org/2000/svg" fill={color} height="48" width="48"><path d="M24 42q-7.5 0-12.75-5.25T6 24q0-7.5 5.25-12.75T24 6q.4 0 .85.025.45.025 1.15.075-1.8 1.6-2.8 3.95-1 2.35-1 4.95 0 4.5 3.15 7.65Q28.5 25.8 33 25.8q2.6 0 4.95-.925T41.9 22.3q.05.6.075.975Q42 23.65 42 24q0 7.5-5.25 12.75T24 42Zm0-3q5.45 0 9.5-3.375t5.05-7.925q-1.25.55-2.675.825Q34.45 28.8 33 28.8q-5.75 0-9.775-4.025T19.2 15q0-1.2.25-2.575.25-1.375.9-3.125-4.9 1.35-8.125 5.475Q9 18.9 9 24q0 6.25 4.375 10.625T24 39Zm-.2-14.85Z" /></svg>
                    }
                </button>
                <label htmlFor="checkbox"></label>
            </div> */}
        </>
    )
}