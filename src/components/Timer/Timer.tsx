import React, { useState,useEffect} from 'react';
import TimerButton from './../TimerButton/TimerButton'

// const Timer = () =>{
 
//   const [minutes,setMinutes] =useState(0)
//   const [seconds,setSeconds] =useState(0)
//   const [isOn,setisOn] =useState(false)



//   function startTimer() {
//     if (isOn === true) {
//       return;
//     }
//     setInterval(() => {
      

//       if (seconds > 0) {
//         setSeconds(seconds - 1);
//       }
//       if (seconds === 0) {
//         if (minutes === 0) {
//          // clearInterval();
//         } else {
//           setMinutes(  minutes - 1)
//             setSeconds(59)
//         }
//       }
//     }, 1000);
//     setisOn(true);
//   }

//   function stopTimer() {
    
//     clearInterval()
//     setisOn(false);
//   }

//   function resetTimer() {
//       stopTimer();
//       setMinutes(0)
//       setSeconds(0)
    
//   }


//     return (<div className="timer-container">
//            <div className="time-display">
//           {minutes}:{ seconds}
//         </div>
//         <div className="timer-button-container">
//           <TimerButton
//             //className="start-timer"
//             buttonAction={startTimer}
//             buttonValue={'Start'}
//           />
//           <TimerButton
//             //className="stop-timer"
//             buttonAction={stopTimer}
//             buttonValue={'Stop'}
//           />
//           <TimerButton
//             //className="reset-timer"
//             buttonAction={resetTimer}
//             buttonValue={'Reset'}
//           />
//         </div>

//         </div>)

  
// }

// export default Timer;




const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [isActive, setIsActive] = useState(false);

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setSeconds(0);
    setMinutes(0);
    setIsActive(false);
  }

  useEffect(() => {
    let interval: any = null;
    if (isActive) {
      interval = setInterval(() => {
        if (minutes === 25) {
            return
        }
        if (seconds === 59) {
          setMinutes((minutes) => minutes + 1);
          setSeconds(0);
        } else {
          setSeconds((seconds) => seconds + 1);
        }
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
      <div className="timer">
             <div className="time-container">
                 <span className="time">{("0" + minutes).slice(-2)} : {("0" + seconds).slice(-2)}</span>
             </div>

             <div className="timer-button-container">
                 <TimerButton buttonAction={toggle} buttonValue={"start"}  />
                 <TimerButton buttonAction={reset} buttonValue={"reset"}  />
             </div>
         </div>
  );
};

export default Timer;