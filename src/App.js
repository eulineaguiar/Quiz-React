import React, { useState } from 'react';
import './App.css';

const Quiz = () => {
  const questions = [
    {
      questionText: 'Qual é a capital do Brasil?',
      answerOptions: [
        { answerText: 'Rio de Janeiro', isCorrect: false },
        { answerText: 'São Paulo', isCorrect: false },
        { answerText: 'Brasília', isCorrect: true },
        { answerText: 'Belo Horizonte', isCorrect: false },
      ],
    },
    {
      questionText: 'Qual é o símbolo químico para o ouro?',
      answerOptions: [
        { answerText: 'Au', isCorrect: true },
        { answerText: 'Ag', isCorrect: false },
        { answerText: 'Fe', isCorrect: false },
        { answerText: 'Cu', isCorrect: false },
      ],
    },
    {
      questionText: 'Quantos planetas existem em nosso sistema solar?',
      answerOptions: [
        { answerText: '7', isCorrect: false },
        { answerText: '8', isCorrect: true },
        { answerText: '9', isCorrect: false },
        { answerText: '10', isCorrect: false },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className='quiz'>
      {showScore ? (
        <div className='score-section'>
          Você acertou {score} de {questions.length} perguntas!
          <button onClick={restartQuiz}>Reiniciar</button>
        </div>
      ) : (
        <>
          <div className='question-section'>
            <div className='question-count'>
              <span>Pergunta {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className='question-text'>{questions[currentQuestion].questionText}</div>
          </div>
          <div className='answer-section'>
            {questions[currentQuestion].answerOptions.map((answerOption, index) => (
              <button key={index} onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz;
