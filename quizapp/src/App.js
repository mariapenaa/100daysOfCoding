import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const questions = [
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
	];

  //What we want to do is use a state object to hold which question the user is currently on, 
  //and update this when an answer button is clicked. You can see this from running the code in the final example.
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answer, setAnswer] = useState();
  const [score, setScore] = useState(); 


  return (
    <div className="app">
      <p>Quiz app</p>

      <div className='question-text'>{questions[currentQuestion].questionText}</div>
      <div className='answer-section'>
        {questions[currentQuestion].answerOptions.map((answerOption, index)=>(
            <button>{answerOption.answerText}</button>
        ))};
      </div>


    </div>
  );
}

export default App;
