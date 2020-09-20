import React, { useState } from 'react'
//import classes from '*.module.css';
//import './timer.css'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
const useStyles = makeStyles((theme) => ({
    root: {
      display:'flex',
      justifyContent:'center',
      //marginTop:theme.spacing(12)
      margin:theme.spacing(2)
    },
    heading:{
        display:'flex',
      justifyContent:'center',
      marginTop:theme.spacing(8),
      fontSize:'4rem'
    },
    timer:{
        margin:theme.spacing(2)
    }
    
  }));

export default function Timer() {
    const classes = useStyles();
    const [time, setTime] = useState({ ms: 0, s: 0, m: 0 });
    
    // set interval
    const [interv, setInterv] = useState<any>();
    
    // just to displpay buttns when needed 
    const [status, setStatus] = useState(0);

    const start = () => {
        //run();
        setStatus(1);
        setInterv(setInterval(run, 10));
        
    }

    var updatedMs = time.ms, updatedS = time.s, updatedM = time.m;
    const run = () => {
        console.log("run")
        if (updatedMs === 100) {
            updatedS++;
            updatedMs = 0;
        }
        updatedMs++;
        if (updatedS === 60) {
            updatedM++;
            updatedS = 0;
        }
        // if (updatedMs === 100) {
        //     updatedS++;
        //     updatedMs = 0;
        // }
        // updatedMs++;
        console.log("updatedS",updatedS)
        console.log("updatedM",updatedM)
        console.log("updatedMs",updatedMs)

        return setTime({ ms: updatedMs, s: updatedS, m: updatedM });
    };

    const stop = () => {
        clearInterval(interv);
        setStatus(2);
    };

    const reset = () => {
        clearInterval(interv);
        setStatus(0);
        setTime({ ms: 0, s: 0, m: 0 })
    };
    const resume = () => start();

    //console.log(interv)
    return (
        <div >
                <div className={classes.heading}>
                   <h4>Stop Watch</h4>
                </div>
            
                <div className={classes.root}>
                    <div className={classes.timer}>
                        <span >{(time.m >= 0) ? time.m : "0" + time.m}</span>
                        <span >Minutes</span>
                    </div>
                    <div className={classes.timer}>
                        <span >{(time.s >= 0) ? time.s : "0" + time.s}</span>
                        <span >Seconds</span>
                    </div>
                    <div className={classes.timer}>
                        <span >{(time.ms >= 0) ? time.ms : "0" + time.ms}</span>
                        <span >MiliSeconds</span>
                    </div>
                </div>
            

               <div className={classes.root} >
                {(status === 0) ?
                    <div >
                    <Button variant="contained"
                        onClick={start}>Start</Button> 
                     </div>
                 : ""
                        
                }

                {(status === 1) ?
                    <div className={classes.root}>
                        <div className={classes.timer}>
                        <Button variant="contained"
                            onClick={stop}>Stop</Button>
                            </div>
                            <div className={classes.timer}>
                        <Button variant="contained"
                            onClick={reset}>Reset</Button>
                            </div>
                    </div> : ""
                }

                {(status === 2) ?
                    <div className={classes.root}>
                        <div className={classes.timer}>
                        <Button variant="contained"
                            onClick={resume}>Resume</Button>
                            </div>
                            <div className={classes.timer}>
                        <Button variant="contained"
                        
                            onClick={reset}>Reset</Button>
                            </div>
                    </div> : ""
                }

            </div>
        </div>
    )

}