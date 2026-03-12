import { useState } from "react";

export default function App() {
  const [score, setScore] = useState(0);

  const getScoreBarStyle = () => {
    const scoreWidth = `${(score / 10) * 100}%`;

    let scoreColor = "#bfbfbf";
    
    if (score >= 8) {
      scoreColor = "#9cc54b";
    } else if (score >= 5) {
      scoreColor = "#f3bc47";
    } else if (score > 0) {
      scoreColor = "#e74c3c";
    }

    return {
      width: scoreWidth,
      backgroundColor: scoreColor,
    };
  };

  const handleScoreChange = (e) => {
    const value = Number(e.target.value);
    if (value >= 0 && value <= 10) {
      setScore(value);
    }
  };

  return (
    <>
      <div className="score-panel">
        <h1>My Score in React</h1>

        <small>Enter a score (0 to 10): </small>
        <input 
          type="number" 
          min="0" 
          max="10"
          value={score}
          onChange={handleScoreChange}
        ></input>

        <div className="score-bar">
          <div className="score-bar-value" style={getScoreBarStyle()}></div>
        </div>
      </div>
    </>
  );
}
