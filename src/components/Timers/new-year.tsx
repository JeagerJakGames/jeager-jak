import React from 'react';
import styles from './countDown.module.scss';
import './test.scss';

export default function NewYear() {
    const [days, setDays] = React.useState<number>(0);
    const [hours, setHours] = React.useState<number>(0);
    const [minutes, setMinutes] = React.useState<number>(0);
    const [seconds, setSeconds] = React.useState<number>(0);
    const [timer, setTimer] = React.useState<number>(0);


    React.useEffect(() => {
        const interval = setInterval(() => { 
            //new years counter
            const year = new Date().getFullYear() + 1;
            const countDownDate:number = new Date(`Jan 1, ${year}`).getTime();
            const now:number = new Date().getTime();
            const distance:number = countDownDate - now;
            setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
            setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
            setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
            setSeconds(Math.floor((distance % (1000 * 60)) / 1000));
        }, timer);
        if(timer != 1000)   setTimer(1000);
        return () => clearInterval(interval);
    },[]);
        
    
    return (
        <>
            <div className='countDownContainer'>
                <div className='countdown'>
                    <div>
                        <h1 className='NewYearTitle'>New Years Countdown</h1>
                    </div>
                    <div className='timerNumbers'>
                     Days: {days}
                    <br/> Hours: {hours}
                    <br/> Minutes: {minutes}
                    <br/>Seconds: {seconds}
                    </div>
                </div>
            </div>
        </>
    )
}