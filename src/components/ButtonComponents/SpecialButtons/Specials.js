import React, { useState } from 'react';
import './Special.css';

//import any components needed
import SpecialButton from './SpecialButton';

//Import your array data to from the provided data file
import { specials } from '../../../data';

const Specials = props => {
  // STEP 2 - add the imported data to state
  const [specialState, setSpecialState] = useState(specials);

  const specialsArray = specialState.map(element => (
    <SpecialButton
      key={element}
      className={element}
      value={element}
      specialFunctions={props.specialFunctions}
    />
  ));


  return (
    <div className="specials-container">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {specialsArray}
      {/* {specialState.map(element => (<SpecialButton key="element" value={element} />
      // ))} */}
    </div>
  );
};

export default Specials;