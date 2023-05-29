const CalcBuild = () => {
  const features = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-',
    '1', '2', '3', '+', '0', '.', '='];
  return (
    <div className="calc">
      {features.map((feature) => (
        <button type="button" key={feature}>
          {feature}
        </button>
      ))}
    </div>
  );
};

export default CalcBuild;
