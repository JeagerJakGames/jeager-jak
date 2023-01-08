export interface switchProps {
    className?: string;
    onChange?: () => void;
    Text?: React.ReactNode;
}


export default function Switch(props : switchProps) {
    const { className, onChange, Text } = props;  

    const classes = className + ' ' + 'switchCyber';

    return (
        // <button className={classes} onClick={onClick}>
        //     {Text}
        // </button>
        <>

      <input
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
      />
      <label
        className="react-switch-label"
        htmlFor={`react-switch-new`}
      >
        <span className={`react-switch-button`} />
      </label>
    </>


    )
}