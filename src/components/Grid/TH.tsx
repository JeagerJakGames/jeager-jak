
import style from './grid.module.scss';
interface thProps {
    keys: string[]
}
export default function TH(props: thProps) {
        return (
            <thead>
                <tr className={style.tr}>
                    {props.keys.map((key, index) => (
                        <th className={style.th}
                            key={index}>
                            {key}
                        </th>
                    ))}
                </tr>
            </thead>
        )
    }