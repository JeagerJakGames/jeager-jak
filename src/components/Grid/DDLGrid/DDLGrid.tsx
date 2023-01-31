import React from 'react';
import TH from '../TH';
import TR from '../TR';
import style from '../grid.module.scss';
import { ThemeContext, ThemeContextType } from '../../../App';
import TRNotes from '../TRNotes';
import SearchGrid from '../SearchGrid/SearchGrid';

interface GridProps {
    gridObjects: any[],
    name?: string,
}


export default function DDLGrid(prop: GridProps) {
    const { name } = prop;
    const { theme, toggleTheme } = React.useContext<ThemeContextType>(ThemeContext);
    const keys = Object.keys(prop.gridObjects[0]);
    const [visibleAmount, setVisibleAmount] = React.useState(10);
    const [page, setPage] = React.useState(1);
    const [visibleObjects, setVisibleObjects] = React.useState(prop.gridObjects.slice(0, visibleAmount));
    const [pageCount, setPageCount] = React.useState(Math.ceil(prop.gridObjects.length / visibleAmount));
    const [noteId, setNoteId] = React.useState(0);
    const [notes, setNotes] = React.useState<any[]>([]);
    const [search, setSearch] = React.useState<string>('');
    const [searchResults, setSearchResults] = React.useState<any[]>([]);




    React.useEffect(() => {
        console.log("useEffect 1");
        if(search !== ''){
            const objs:any[] = prop.gridObjects.filter((obj => {
                for(let key in obj) {
                    if(obj[key].toString().toLowerCase().includes(search.toLowerCase())) return obj;
                }
            }));
            if(objs.length > 0){
                console.log(objs);
                setVisibleObjects(objs.slice(0, visibleAmount));
                setSearchResults(objs);
                setPageCount(Math.ceil(objs.length / visibleAmount));
            }
        }
        else{
            setVisibleObjects(prop.gridObjects.slice(0, visibleAmount));
            setPageCount(Math.ceil(prop.gridObjects.length / visibleAmount)); 
        }
    }, [search]);

    React.useEffect(() => {
        console.log("useEffect 2");
        if(searchResults.length < 1){
            setPageCount(Math.ceil(prop.gridObjects.length / visibleAmount)); 
        }
    }, [visibleAmount, page, visibleObjects]);

    React.useEffect(() => {
        console.log("useEffect 3");
        console.log(noteId);
        if (noteId > 0) {
            setNotes([
                { id: 1, note: 'This is a note' },
                { id: 2, note: 'This is a note' },
                { id: 3, note: 'This is a note' },
                { id: 4, note: 'This is a note' },
            ]);
        }
        else setNotes([]);
    }, [noteId]);

    function nextPage() {
        if(searchResults.length > 0){
            if (page < pageCount) {
                setPage(page + 1);
                setVisibleObjects(searchResults.slice((page) * visibleAmount, (page + 1) * visibleAmount));
            }
        }
        else{
            if (page < pageCount) {
                setPage(page + 1);
                setVisibleObjects(prop.gridObjects.slice((page) * visibleAmount, (page + 1) * visibleAmount));
            }
        }

    }
    function prevPage() {
        if(searchResults.length > 0){
            if (page > 1) {
                setPage(page - 1);
                setVisibleObjects(searchResults.slice((page - 2) * visibleAmount, (page - 1) * visibleAmount));
            }
        }
        else{
            if (page > 1) {
                setPage(page - 1);
                setVisibleObjects(prop.gridObjects.slice((page - 2) * visibleAmount, (page - 1) * visibleAmount));
            }
        }

    }
    function clearSearch() {
        setSearch('');
        setSearchResults([]);
        setPage(1);
        setPageCount(Math.ceil(prop.gridObjects.length / visibleAmount));
    }



    return (
        <>
        {/* To Display the Note from the ToDo item you click on */}
            <div className={noteId > 0 ? style.block : style.none}>
                <button onClick={() => setNoteId(0)}>Back</button>
                {notes.map((note, index) => (
                    <div key={index}>
                        <p>{note.note}</p>
                    </div>
                ))}
                
            </div>

            {/* The Header bit. Probably needs to be put in a component */}
            <div className={style.resizeable}>
                <div className={`${style.tblheader} ${style["display-row"]}`}>
                    <h3>{name}</h3>
                    <>
                        <SearchGrid setSearch={setSearch} />
                    </>
                    <div className={style.alignCenter}>
                        <button onClick={() => prevPage()}>&#x3c;</button>
                        <p> Viewing Page: {page} of  {pageCount} pages</p>
                        <button onClick={() => nextPage()}>&#x3e;</button>
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
                </div>
                {/* The table content */}
                <table className={`${style.table} ${style["table-light"]}`}>
                    <TH keys={keys} />
                        {
                        visibleObjects.map((obj, index) => (
                            <TR key={index} keys={keys} obj={obj} setNoteId={setNoteId} />
                        ))
                    }

                </table>
                {/* The footer. Also probably needs ot be put in a component */}
                <div className={`${style.tblfooter} ${style["display-row"]}`}>
                    <div className={style.alignCenter}>
                        <button onClick={() => prevPage()}>&#x3c;</button>
                        <p> Viewing Page: {page} of  {pageCount} pages</p>
                        <button onClick={() => nextPage()}>&#x3e;</button>
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
                </div>
            </div>

        </>
    )
}