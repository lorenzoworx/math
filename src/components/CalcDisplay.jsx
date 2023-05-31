import PropTypes from 'prop-types';

const CalcDisplay = ({ result }) => (
  <div className="calculatorDisplay">
    <span className="current">{result}</span>
  </div>
);

CalcDisplay.propTypes = {
  result: PropTypes.string.isRequired,
};

export default CalcDisplay;
