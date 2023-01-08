
import React from 'react';
import TH from './TH';
import TR from './TR';
import style from './grid.module.scss';

interface GridProps {
    gridObjects: any[]
}


export default function Grid(prop: GridProps) {
    const keys = Object.keys(prop.gridObjects[0]);
    

    return (
        <>
            <table className={style.table}>
                <TH keys={keys} />
                {prop.gridObjects.map((obj, index) => {
                    return <TR keys={keys} obj={obj} key={index} />
                })}
            </table>
        </>
    )
}