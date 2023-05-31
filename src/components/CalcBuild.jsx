import PropTypes from 'prop-types';

const CalcBuild = ({ handleClick }) => {
  const features = ['AC', '+/-', '%', '÷', '7', '8',
    '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+',
    '0', '.', '='];
  return (
    <div className="calc">
      {features.map((feature) => (
        <button type="button" key={feature} value={feature} onClick={handleClick}>
          {feature}
        </button>
      ))}
    </div>
  );
};

CalcBuild.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default CalcBuild;
