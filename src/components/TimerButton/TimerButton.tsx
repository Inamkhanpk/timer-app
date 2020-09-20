import React from 'react';
import PropTypes from 'prop-types';

type Props = {
  buttonAction: () => void;
  buttonValue: String;
  
}


const TimerButton:React.FC<Props> = ({ buttonAction, buttonValue }) => (
  <div className="button-container" onClick={() => buttonAction()}>
     
     <p className="button-value">{buttonValue}</p>
  </div>
);

TimerButton.propTypes = {
  buttonAction: PropTypes.func.isRequired,
  buttonValue: PropTypes.string.isRequired,
};

export default TimerButton;