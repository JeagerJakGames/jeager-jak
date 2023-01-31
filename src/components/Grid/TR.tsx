
import React from 'react';
import style from './grid.module.scss';
interface trProps {
    keys: string[],
    obj: any,
    setNoteId?: React.Dispatch<React.SetStateAction<number>> | undefined,
}
export default function TR(row: trProps) {
    const { setNoteId, obj, keys } = row;

    return (
        <tbody>
            <tr 
            onClick={(e) => {
                setNoteId && setNoteId(obj.id);
            }}
            className={style.tr}
            >
                {keys.map((key, index) => (
                    <td
                    className={style.td}
                        key={index}>
                        {obj[key]}
                    </td>
                ))}
            </tr>
        </tbody>
    )
}