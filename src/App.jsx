import { useEffect, useState } from 'react';
import './App.css';
import Ball from './components/Ball';

function App() {

  const initialLetters = ["H", "E", "L", "L", "O"];
  const initialColors = ["linear-gradient(to right, red , yellow)", "linear-gradient(to right, yellow , green)", "linear-gradient(to right, pink , yellow)", "linear-gradient(to right, blue , yellow)", "linear-gradient(to right, orange , yellow)"]

  const [balls, setBalls] = useState([]);
  const [colors, setColors] = useState(initialColors);
  const [letters, setLetters] = useState(initialLetters);

  useEffect(() => {
    // Initialize balls only once
    if (balls.length < 5) {
      const initialBalls = letters.map((letter, index) => (
        <Ball key={index} color={colors[index]} letter={letter} />
      ));
      setBalls(initialBalls);
    }


  }, []);

  useEffect(() => {
    // Update balls whenever letters change
    const updatedBalls = letters.map((letter, index) => (
      <Ball key={index} color={initialColors[index]} letter={letter} />
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
