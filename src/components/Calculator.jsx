import { useState } from 'react';
import calculate from '../logic/calculate';
import CalcBuild from './CalcBuild';
import CalcDisplay from './CalcDisplay';

const calcObject = {
  total: null,
  next: null,
  operation: null,
};

const Calculator = () => {
  const [calcResult, setCalcResult] = useState('0');
  const handleClick = (e) => {
    const {
      total = null,
      next = null,
      operation = null,
    } = calculate(calcObject, e.target.value);
    calcObject.total = total;
    calcObject.next = next;
    calcObject.operation = operation;
    if (calcObject.total || calcObject.next) {
      setCalcResult(calcObject.next ? calcObject.next : calcObject.total);
    } else {
      setCalcResult('0');
    }
  };
  return (
    <div className="calculator">
      <CalcDisplay result={calcResult} />
      <CalcBuild handleClick={handleClick} />
    </div>
  );
};

export default Calculator;
