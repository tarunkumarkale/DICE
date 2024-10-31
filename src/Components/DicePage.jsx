import React, { useState } from 'react';
import { dice_1, dice_2, dice_3, dice_4, dice_5, dice_6 } from '../Constant';

const DicePage = () => {
  const [dice, setDice] = useState(1);  // Start with one dice value
  const [score, setScore] = useState(0);

  const diceImages = [dice_1, dice_2, dice_3, dice_4, dice_5, dice_6];

  const checkHome = () => {
    console.log("Back to homepage");
  };

  const match = (ele) => {
    console.log(`Dice ${ele} clicked`);
    // Add logic to update score or handle dice click as needed
    setScore(score + ele);  // Example logic to add clicked dice value to score
  };

  const reset = () => {
    setScore(0);
    setDice(1);  // Reset dice to initial state
  };

  const rollDice = () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    setDice(randomNumber);
  };

  return (
    <>
      <div className='flex flex-row justify-between'>
        <button onClick={checkHome} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
          Back 
        </button>
        <h1 className='text-3xl'>{score}</h1>

        {/* Display all dice images and add onClick to each */}
        {[1, 2, 3, 4, 5, 6].map((ele, index) => (
          <div key={index} className='flex flex-row mx-2'>
            <img 
              src={diceImages[index]}  
              onClick={() => match(ele)} 
              alt={`Dice ${ele}`} 
              className="cursor-pointer"
            />
          </div>
        ))}
      </div>

      <div className='flex flex-col items-center mt-4'>
        {/* Display the rolled dice */}
        <img 
          src={diceImages[dice - 1]} 
          onClick={()=>rollDice(diceImages[dice - 1])}  
          alt="Rolled Dice" 
          className="cursor-pointer w-16 h-16 mb-2"
        />
        <button 
          onClick={reset} 
          className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded"
        >
          Reset
        </button>
      </div>
    </>
  );
};

export default DicePage;
