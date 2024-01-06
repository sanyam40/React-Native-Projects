import React from "react";
import { createContext } from 'react';

export const AppContext = createContext();

export function AppContextProvider({ children }) {

  const [value1, setValue1] = React.useState('0');
  const [value2, setValue2] = React.useState('0');
  const [operator, setOperator] = React.useState('');
  const [ans, setAns] = React.useState(0);

  function calculate() {
    let n = Number(value1);
    let m = Number(value2);

    switch (operator) {
      case '+':
        setAns(n + m);
        break;
      case '-':
        setAns(n - m);
        break;
      case '*':
        setAns(n * m);
        break;
      case '/':
        setAns(n / m);
        break;
    }
  }

  function onPressHandler(number) {
    if (operator === '') {
      setValue1(value1 === '0' ? number.toString() : value1 + number);
    } else {
      setValue2(value2 === '0' ? number.toString() : value2 + number);
    }
  }

  function onPressOperator(selectedOperator) {
    if (value1 !== '0' && value2 !== '0') {
      calculate();
    }
    setOperator(selectedOperator);
  }

  function reset() {
    setValue1('0');
    setValue2('0');
    setOperator('');
    setAns(0);
  }

  const value = {
    value1,
    value2,
    operator,
    ans,
    onPressHandler,
    onPressOperator,
    reset,
    calculate,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}