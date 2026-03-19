import { useEffect, useState } from 'react';
import './App.css';
import Ball from './components/Ball';

function App() {
  const letters = ["H", "E", "L", "L", "O"];
  const initialColors = ["linear-gradient(to right, red , yellow)", "linear-gradient(to right, yellow , green)", "linear-gradient(to right, pink , yellow)", "linear-gradient(to right, blue , yellow)", "linear-gradient(to right, orange , yellow)"]
  const [balls, setBalls] = useState([]);
  const [colors, setColors] = useState(initialColors);

  useEffect(() => {
    // Initialize balls only once
    if (balls.length < 5) {
      const initialBalls = letters.map((letter, index) => (
        <Ball key={index} color={colors[index]} letter={letter} />
      ));
      setBalls(initialBalls);
    }

    // Setting up the color cycling interval
    const interval = setInterval(() => {
      setColors(prevColors => {
        return prevColors.map((color, index) => {
          // Change to the next color in the array cyclically
          const nextColorIndex = (initialColors.indexOf(color) + 1) % initialColors.length;
          return initialColors[nextColorIndex];
        });
      });
    }, 500); // Change colors every second

    return () => {
      clearInterval(interval); // Cleanup interval on unmount
    };

  }, [balls.length, colors, initialColors, letters]);

  useEffect(() => {
    // Update balls whenever colors change
    const updatedBalls = letters.map((letter, index) => (
      <Ball key={index} color={colors[index]} letter={letter} />
    ));
    setBalls(updatedBalls);
  }, [colors, letters]); // Re-run whenever colors or letters change

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <p>Mix of Tailwind CSS and CSS3</p>
      <div className='ball-container flex justify-center items-center'>
        {balls}
      </div>
    </>
  );
}

export default App;
