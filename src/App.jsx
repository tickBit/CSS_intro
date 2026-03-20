import { useEffect, useState } from 'react';
import './App.css';
import Ball from './components/Ball';
import Span from './components/Span';

function App() {
  
  const initialLetters = ["1", "2", "3", "4", "5"];
  const initialColors = ["linear-gradient(to right, red , yellow)", "linear-gradient(to right, yellow , green)", "linear-gradient(to right, pink , yellow)", "linear-gradient(to right, blue , yellow)", "linear-gradient(to right, orange , yellow)"]

  const generateBalls = () => {
    
    const initialBalls = colors.map((color, index) => (
          <Ball key={index} color={color} letter={letters[index]} />
        ));
        return (initialBalls)
    }

  const [colors] = useState(initialColors);
  const [letters, setLetters] = useState(initialLetters);

  const [balls, setBalls] = useState(() => generateBalls());

 useEffect(() => {

    // Setting up the number cycling interval
    const interval = setInterval(() => {
      const first = letters[0]
      const viipale = letters.slice(1,letters.length)
      setLetters([viipale, first].flat())

    const updatedBalls = colors.map((color, index) => (
          <Ball key={index} color={color} letter={letters[index]} />
        ));    
    
      setBalls(updatedBalls);

      }, 1500);

    return () => {
      clearInterval(interval); // Cleanup interval on unmount
    };
  }, [letters, colors])

  return (
    <>
    <div style={{textAlign: "center"}}>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <p>Mix of Tailwind CSS and CSS3</p>
      <div className='ball-container' style={{marginTop: "100px"}}>
        {balls}
      </div>
    </div>
    <div>
    
      <Span />
    
    </div>
    </>
  );
}

export default App;
