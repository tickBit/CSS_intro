import { useEffect, useState } from 'react';
import './App.css';
import Ball from './components/Ball';

function App() {

  const initialLetters = ["1", "2", "3", "4", "5"];
  const initialColors = ["linear-gradient(to right, red , yellow)", "linear-gradient(to right, yellow , green)", "linear-gradient(to right, pink , yellow)", "linear-gradient(to right, blue , yellow)", "linear-gradient(to right, orange , yellow)"]

  const [balls, setBalls] = useState([]);
  const [colors, setColors] = useState(initialColors);
  const [letters, setLetters] = useState(initialLetters);

 useEffect(() => {
    // Initialize balls only once
    if (balls.length < 5) {
      const initialBalls = colors.map((color, index) => (
        <Ball key={index} color={color} letter={letters[index]} />
      ));
      setBalls(initialBalls);
    }

    // Setting up the number cycling interval
    const interval = setInterval(() => {
      const first = letters[0]
      setLetters(prev => [letters.shift(), ...prev]);
      setLetters(prevLetters => [...prevLetters, first]);
      console.log(letters)
      }, 1500);

    return () => {
      clearInterval(interval); // Cleanup interval on unmount
    };

  }, [balls.length, colors, initialLetters, letters]);

  useEffect(() => {
    // Update balls whenever colors change
    const updatedBalls = colors.map((color, index) => (
      <Ball key={index} color={color} letter={letters[index]} />
    ));
    setBalls(updatedBalls);
  }, [colors, letters]); // Re-run whenever colors or letters change

  return (
    <>
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <p>Mix of Tailwind CSS and CSS3</p>
      <div className='ball-container' style={{marginTop: "100px"}}>
        {balls}
      </div>
    </div>
    </>
  );
}

export default App;
