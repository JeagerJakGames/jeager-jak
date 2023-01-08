
import React from 'react';
import style from './grid.module.scss';
interface trProps {
    keys: string[],
    obj: any
}
export default function TR(row: trProps) {
    


    return (
        <tbody>
            <tr className={style.tr}>
                {row.keys.map((key, index) => (
                    <td
                    className={style.td}
                        key={index}>
                        {row.obj[key]}
                    </td>
                ))}
            </tr>
        </tbody>
    )
}