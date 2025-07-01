import { useState } from 'react';
import Quiz from './components/Quiz';
import './App.css';

function App() {
  const [difficulty, setDifficulty] = useState('easy');

  return (
    <div className="app-container">
      <h1>🧠 AI Quiz Game</h1>
      <label>
        Select Difficulty:
        <select onChange={(e) => setDifficulty(e.target.value)} value={difficulty}>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </label>

      <Quiz difficulty={difficulty} />
    </div>
  );
}

export default App;
