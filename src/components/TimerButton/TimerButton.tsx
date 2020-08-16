import React from 'react';

//import './TimerButton.css';


type Props = {
  buttonAction: () => void;
  buttonValue: String;
  
}


const TimerButton: React.FC<Props> =({ buttonAction, buttonValue }) => (
    <div className="button-container" onClick={() => buttonAction()}>
      <p className="button-value">{buttonValue}</p>
    </div>
  );



export default TimerButton;