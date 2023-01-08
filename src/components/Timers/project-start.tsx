import React from 'react';
import style from './countdown.module.scss';

export default function ProjectStart(){
    const start:number = 1672555500626;
    const startDate:Date = new Date(start);


    const [days, setDays] = React.useState<number>(0);
    const [hours, setHours] = React.useState<number>(0);
    const [minutes, setMinutes] = React.useState<number>(0);
    const [seconds, setSeconds] = React.useState<number>(0);
    const [timer, setTimer] = React.useState<number>(0);

    const daysSince = () => {
        const now = new Date();
        const diff = now.getTime() - startDate.getTime();
        setHours(Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        setDays(Math.floor(diff / (1000 * 60 * 60 * 24)));
        setMinutes(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)));
        setSeconds(Math.floor((diff % (1000 * 60)) / 1000));
    }
    
    React.useEffect(() => {
        const interval = setInterval(() => { 
            daysSince();
        }, timer);
        if(timer != 1000)   setTimer(1000);
        return () => clearInterval(interval);
    },[]);

    return(
        <>
            <div className={style.countDownContainer}>
                <div className={style.countdown}>
                    <p className={style.timerNumbers}>
                    
                        {startDate.toDateString()}
                        <br/>
                        <br></br>
                        DAYS: {days}
                        <br></br>
                        HOURS: {hours}
                        <br></br>
                        MINUTES: {minutes}
                        <br></br>
                        SECONDS: {seconds}
                    </p>
                </div>
            </div>
        </>
    )
}