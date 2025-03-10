import React, { useState, useEffect } from 'react';
import './App.css';
// STEP 4 - import the button and display components
// Don't forget to import any extra css/scss files you build into the correct component

// Logo has already been provided for you. Do the same for the remaining components
import Logo from './components/DisplayComponents/Logo';
import Specials from './components/ButtonComponents/SpecialButtons/Specials';
import Numbers from './components/ButtonComponents/NumberButtons/Numbers';
import Operators from './components/ButtonComponents/OperatorButtons/Operators';
import Display from './components/DisplayComponents/Display';

function App() {
  // STEP 5 - After you get the components displaying using the provided data file, write your state hooks here.
  // Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing
  // Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should recieve 5 if the user clicks on
  // the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
  // Don't forget to pass the functions (and any additional data needed) to the components as props
  const [display, setDisplay] = useState('');
  //const [stack, setStack] = useState([]);
  const [firstNum, setFirstNum] = useState(null);
  const [operation, setOperation] = useState(null);
  const [secondNum, setSecondNum] = useState(null);

  const specialFunctions = input => {
    if (input === 'C') {
      setDisplay('');
      setFirstNum(null);
      setSecondNum(null);
      setOperation(null);
    } else if (input === '+/-') {
      setDisplay(Number(display) * -1);
    } else if (input === '%') {
      setDisplay(Number(display) / 100);
    }
  };

  const numDisplay = input => {
    const inputArr = [];
    inputArr.push(display.toString());
    inputArr.push(input.toString());
    setDisplay(inputArr.join(''));
  };

    const operator = input => {
      console.log(input);
      if (input !== '=') {
        setFirstNum(parseFloat(display));
        setOperation(input);
        setDisplay('');
        return;
      } else if (input === '=') {
        setSecondNum(parseFloat(display));
      }
    };
    
  useEffect(() => {
    secondNum && operation === '+' && setDisplay(firstNum + secondNum);
  }, [firstNum, operation, secondNum]);

  useEffect(() => {
    secondNum && operation === '-' && setDisplay(firstNum - secondNum);
  }, [firstNum, operation, secondNum]);

  useEffect(() => {
    secondNum && operation === 'x' && setDisplay(firstNum * secondNum);
  }, [firstNum, operation, secondNum]);

  useEffect(() => {
    secondNum && operation === '/' && setDisplay(firstNum / secondNum);
  }, [firstNum, operation, secondNum]);

      // }, [display, firstNum, secondNum, operation]);
  // if (input === '=' && operation) {
  //   setSecondNum(Number(display));
  //   if (operation === '+') {
  //     setDisplay(firstNum + secondNum);
  //   } else if (operation === '-') {
  //     setDisplay(firstNum - secondNum);
  //   } else if (operation === '*') {
  //     setDisplay(firstNum * secondNum);
  //   } else if (operation === '/') {
  //     setDisplay(firstNum / secondNum);
  //   }
  // } else if (operation === null) {
  //   return;
  // } else {
  //   setFirstNum(Number(display));
  //   setOperation(input);
  //   setDisplay('');
  // }
  // console.log(display);
  // setStack(stack.push(Number(display)));
  // setStack(stack.push(operation));
  // setDisplay('');
  // console.log(input);
  return (
    <div className="container">
      <Logo />
      <div className="App">
        {/* STEP 4 - Render your components here and be sure to properly import/export all files */}
        <Display display={display} />
        <div className="buttons">
          <div className="buttons-left">
          <Specials specialFunctions={specialFunctions} />
            <Numbers numDisplay={numDisplay} />
          </div>
          <div className="buttons-right">
          <Operators operator={operator} />
          </div>
        </div>
      </div>
      {/* <h1>Display: {display}</h1>
      <h1>FirstNum: {firstNum}</h1>
      <h1>Operator: {operation}</h1>
      <h1>SecondNum: {secondNum}</h1> */}
    </div>
  );
}

export default App;
