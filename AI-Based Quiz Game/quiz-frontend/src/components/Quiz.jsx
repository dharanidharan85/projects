import { useEffect, useState } from 'react';
import axios from 'axios';

function Quiz({ difficulty }) {
  const [questions, setQuestions] = useState([]);
  const [selected, setSelected] = useState({});
  const [score, setScore] = useState(null);
  const [timer, setTimer] = useState(60);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [history, setHistory] = useState([]);

  // Fetch quiz data
  useEffect(() => {
    axios.get(`http://localhost:8080/api/quiz?difficulty=${difficulty}`)
      .then(res => {
        setQuestions(res.data);
        setSelected({});
        setScore(null);
        setTimer(60);
        setIsSubmitted(false);
      });
  }, [difficulty]);

  // Load history from localStorage
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('quizHistory')) || [];
    setHistory(stored);
  }, []);

  // Timer logic
  useEffect(() => {
    if (score !== null || isSubmitted) return;

    const interval = setInterval(() => {
      setTimer(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [score, isSubmitted]);

  // Select answer
  const handleSelect = (questionIdx, option) => {
    setSelected(prev => ({ ...prev, [questionIdx]: option }));
  };

  // Submit and store score
  const handleSubmit = () => {
    let points = 0;
    questions.forEach((q, idx) => {
      if (selected[idx] === q.correctAnswer) points++;
    });

    setScore(points);
    setIsSubmitted(true);

    const newEntry = {
      score: points,
      total: questions.length,
      difficulty,
      date: new Date().toLocaleString(),
    };

    const updatedHistory = [newEntry, ...history];
    setHistory(updatedHistory);
    localStorage.setItem('quizHistory', JSON.stringify(updatedHistory));
  };

  return (
    <div className="quiz-box">
      <h2>⏱️ Time Left: {timer} seconds</h2>

      {questions.map((q, idx) => (
        <div key={idx} className="question-card">
          <p dangerouslySetInnerHTML={{ __html: q.question }} />
          {q.options.map((opt, i) => {
            let className = "";

            if (isSubmitted) {
              if (opt === q.correctAnswer) {
                className = "correct";
              } else if (selected[idx] === opt) {
                className = "wrong";
              }
            } else {
              if (selected[idx] === opt) {
                className = "selected";
              }
            }

            return (
              <button
                key={i}
                className={className}
                onClick={() => handleSelect(idx, opt)}
                dangerouslySetInnerHTML={{ __html: opt }}
                disabled={isSubmitted}
              />
            );
          })}
        </div>
      ))}

      {!isSubmitted && (
        <button onClick={handleSubmit}>Submit Quiz</button>
      )}
      {score !== null && (
        <h2>Your Score: {score} / {questions.length}</h2>
      )}

      {history.length > 0 && (
        <div className="history-section">
          <h3>📜 Score History</h3>
          <ul>
            {history.map((entry, idx) => (
              <li key={idx}>
                {entry.date} — {entry.difficulty} — {entry.score}/{entry.total}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Quiz;

// import { useEffect, useState } from 'react';
// import axios from 'axios';

// function Quiz({ difficulty }) {
//   const [questions, setQuestions] = useState([]);
//   const [selected, setSelected] = useState({});
//   const [score, setScore] = useState(null);

//   useEffect(() => {
//     axios.get(`http://localhost:8080/api/quiz?difficulty=${difficulty}`)
//       .then(res => {
//         setQuestions(res.data);
//         setSelected({});
//         setScore(null);
//       });
//   }, [difficulty]);

//   const handleSelect = (questionIdx, option) => {
//     setSelected(prev => ({ ...prev, [questionIdx]: option }));
//   };

//   const handleSubmit = () => {
//     let points = 0;
//     questions.forEach((q, idx) => {
//       if (selected[idx] === q.correctAnswer) points++;
//     });
//     setScore(points);
//   };

//   return (
//     <div className="quiz-box">
//       {questions.map((q, idx) => (
//         <div key={idx} className="question-card">
//           <p dangerouslySetInnerHTML={{ __html: q.question }} />
//           {q.options.map((opt, i) => (
//             <button
//               key={i}
//               className={selected[idx] === opt ? 'selected' : ''}
//               onClick={() => handleSelect(idx, opt)}
//               dangerouslySetInnerHTML={{ __html: opt }}
//             />
//           ))}
//         </div>
//       ))}

//       <button onClick={handleSubmit}>Submit Quiz</button>
//       {score !== null && <h2>Your Score: {score} / {questions.length}</h2>}
//     </div>
//   );
// }

// export default Quiz;
