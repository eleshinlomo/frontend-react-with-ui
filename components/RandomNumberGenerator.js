import { useEffect, useState } from 'react';

const RandomNumberGenerator = ()=> {
    
  const [randomNumbers, setRandomNumbers] = useState([]);

  
  const generateRandomNumbers = () => {
    const randomNumbers = [];
    for (let i = 0; i < 5; i++) {
      randomNumbers.push(Math.floor(Math.random()*70));
    }
    randomNumbers.push(Math.floor(Math.random()*25))
    setRandomNumbers(randomNumbers);
  };
  




  return (
    <div>
      <p className='flex justify-center'>Your random numbers are:</p>
      <ul className='flex space-x-4 justify-center text-2xl font-bold -mt-4'>
        {randomNumbers.map((number, index) => (
          <li key={index} className=''>{number}</li>
        ))}
      </ul>
      <div className='flex justify-center'>
      <button onClick={generateRandomNumbers} className='text-center b ml-55 text-3xl -mt-2'>GENERATE</button>
      </div>
    </div>
  );
}

export default RandomNumberGenerator;
