import React from 'react';
import style from './grid.module.scss';
interface TRNotes {
    keys: string[],
    obj: any,
    setNoteId(id:number): React.Dispatch<React.SetStateAction<number>>,
}

export default function TRNotes(row: TRNotes) {
    const { setNoteId, obj, keys } = row;

    return (
        <>
            <tbody>
                <tr 
                className={style.tr}
                onClick={(e) => {
                    setNoteId(obj.id);
                }}>
                    {keys.map((key, index) => (
                        <td
                            className={style.td}
                            key={index}>
                            {row.obj[key]}
                        </td>
                    ))}
                </tr>
            </tbody>
        </>
    )
}