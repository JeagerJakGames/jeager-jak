
export interface btnProps {
    className?: string;
    onClick?: () => void;
    Text?: React.ReactNode;
}


export default function btnCyber(props : btnProps) {
    const { className, onClick, Text } = props;  

    const classes = className + ' ' + 'btnCyber';

    return (
        <button className={classes} onClick={onClick}>
            {Text}
        </button>
    )
}