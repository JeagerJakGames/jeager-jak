
import React from 'react';
import TH from './TH';
import TR from './TR';
import style from './grid.module.scss';
import { ThemeContext, ThemeContextType } from '../../App';

interface GridProps {
    gridObjects: any[],
}


export default function Grid(prop: GridProps) {
    const { theme, toggleTheme } = React.useContext<ThemeContextType>(ThemeContext);
    const keys = Object.keys(prop.gridObjects[0]);
    const [visibleAmount, setVisibleAmount] = React.useState(10);
    const [page, setPage] = React.useState(1);
    const [visibleObjects, setVisibleObjects] = React.useState(prop.gridObjects.slice(0, visibleAmount));
    const [pageCount, setPageCount] = React.useState(Math.ceil(prop.gridObjects.length / visibleAmount));

    React.useEffect(() => {
        setPageCount(Math.ceil(prop.gridObjects.length / visibleAmount));
    }, [visibleAmount, page, visibleObjects, pageCount]);
    

    return (
        <>
            <div>
                <div className={style.tblheader}>
                    <button onClick={() => {
                        if (page > 1) {
                            setPage(page - 1);
                            setVisibleObjects(prop.gridObjects.slice((page - 2) * visibleAmount, (page - 1) * visibleAmount));
                        }
                    }}>&#x3c;</button>
                    <button onClick={() => {
                        if (page < Math.ceil(prop.gridObjects.length / visibleAmount)) {
                            setPage(page + 1);
                            setVisibleObjects(prop.gridObjects.slice(page * visibleAmount, (page + 1) * visibleAmount));
                        }
                    }}>&#x3e;</button>
                    <select onChange={(e) => {
                        setVisibleAmount(parseInt(e.target.value));
                        setVisibleObjects(prop.gridObjects.slice(0, parseInt(e.target.value)));
                    }}>
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                    </select>
                </div>
                <table className={`${style.table} ${style["table-light"]}`}>
                    <TH keys={keys} />
                    {visibleObjects.map((obj, index) => {
                        return <TR keys={keys} obj={obj} key={index} />
                    })}
                </table>
                <div className={style.tblfooter}>
                    <button onClick={() => {
                        if (page > 1) {
                            setPage(page - 1);
                            setVisibleObjects(prop.gridObjects.slice((page - 2) * visibleAmount, (page - 1) * visibleAmount));
                        }
                    }}>&#x3c;</button>
                    <p> Viewing Page: {page} of  {pageCount} pages</p>
                    <button onClick={() => {
                        if (page < Math.ceil(prop.gridObjects.length / visibleAmount)) {
                            setPage(page + 1);
                            setVisibleObjects(prop.gridObjects.slice(page * visibleAmount, (page + 1) * visibleAmount));
                        }
                    }}>&#x3e;</button>

                </div>
            </div>

        </>
    )
}