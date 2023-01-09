// create a new file called multiSelect.tsx

import React, { useEffect, useState } from 'react';
import styles from './select.module.scss';

export type SelectOption = {
    value: any;
    label: string;
}

type SelectProps = {
    options: SelectOption[];
    value: SelectOption[];
    onChange: (value: SelectOption[]) => void;
}

export default function MultiSelect({ value, onChange, options }: SelectProps) {
    const [showOptions, setShowOptions] = React.useState(false);
    const [highlight, setHighlight] = React.useState(0);
    const containerRef = React.useRef<HTMLDivElement>(null);

    var thing: any = '';
    function clearOptions() {
        onChange([]);
    }
    function selectOption(option: SelectOption) {
        if (value.includes(option)) onChange(value.filter(v => v !== option));
        else onChange([...value, option]);
    }
    function isOptionSelected(option: SelectOption) {
        return value.includes(option);
    }
    useEffect(() => {
        if (showOptions) setHighlight(0) // reset the highlight when the options are shown
    }, [showOptions]);
    useEffect(() => {
        function handleKeyDown(e: KeyboardEvent) {
            if (e.target != containerRef.current) return; // if the event is not coming from the container then return
            console.log(e.key);
            switch (e.key) {
                case 'Enter':
                case 'Space':
                case ' ':
                    setShowOptions(prev => !prev);
                    if (showOptions) selectOption(options[highlight]);
                    break;
                case 'ArrowDown':
                    setHighlight(prev => prev === options.length - 1 ? 0 : prev + 1);
                    break;
                case 'ArrowUp':
                    setHighlight(prev => prev === 0 ? options.length - 1 : prev - 1);
                    break;
                case 'Escape':
                    setShowOptions(false);
                    break;
            }
        }
        containerRef.current?.addEventListener('keydown', handleKeyDown);
        return () => {
            containerRef.current?.removeEventListener('keydown', handleKeyDown);
        }
    }, [showOptions, highlight, options]);

    return (
        <>
            <div
                ref={containerRef}
                onBlur={() => setShowOptions(false)} // when clicking off the screen this will close the options
                onClick={() => setShowOptions(prev => !prev)}
                className={styles.container}
                tabIndex={0}
            >
                <span className={styles.value}>{value.map(v => (
                    <button
                        className={styles['option-badge']}
                        key={v.value}
                        onClick={e => {
                            e.stopPropagation(); // stop the event from bubbling up to the parent
                            selectOption(v);
                        }}>
                        {v.label}
                        <span className={styles['remove-btn']}>
                            &times;
                        </span>
                    </button>
                ))}</span> {/*? must be used because value is optional*/}
                <button
                    onClick={e => {
                        e.stopPropagation(); // stop the event from bubbling up to the parent
                        clearOptions();
                    }}
                    className={styles["clear-btn"]}
                >&times;</button>
                <div className={styles.divider}></div>
                <div className={styles.caret}></div>
                <ul className={`${styles.options} ${showOptions ? styles.show : ''}`}>
                    {options.map((option, index) => (
                        <li
                            key={option.label}
                            className={
                                `${styles.option} 
                                ${isOptionSelected(option) ? styles.selected : ''} 
                                ${highlight === index ? styles.highlighted : ''}`
                            }
                            onClick={e => {
                                e.stopPropagation(); // stop the event from bubbling up to the parent
                                selectOption(option);
                                setShowOptions(false); // close the options
                            }}
                            onMouseEnter={() => setHighlight(index)}
                        >
                            {option.label}
                        </li>
                    ))}

                </ul>
            </div>
        </>
    )
}