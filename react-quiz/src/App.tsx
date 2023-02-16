import  {useState}  from 'react';
import { fetchQuizQuestions } from './API';

//components
import QuestionCard from './components/QuestionCard';
import { FileWatcherEventKind } from 'typescript';

//types
import { QuestionState, Difficulty } from './API';
import { type } from '@testing-library/user-event/dist/type';

//styles
import {GlobalStyle} from './API';

type AnswerObject ={
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const TOTAL_QUESTIONS = 10;

const App=() => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState (0);
  const [gameOver, setGameOver] = useState(true);

  console.log(questions);

  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS, Difficulty.EASY
    );

    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);

  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver){
      //user answer
      const answer = e.currentTarget.value;
      // check answer against correct answer
      const correct = questions[number].correct_answer === answer;
      // score if answer is correct
      if (correct) setScore(prev => prev + 1);
      //save answer in the correct answer array
      const AnswerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,

      };
      setUserAnswers((prev) => [...prev, AnswerObject]);
    }


  };

  const nextQuestion = () => {
    //go to the next question
    const nextQuestion = number + 1;
    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setNumber(nextQuestion);
    }

  }



  return (
    <>
    <GlobalStyle/>
    <div className="App">
      <h1>React Quiz</h1>
      {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
      
      <button className='start' onClick={startTrivia}>
        Start
      </button>
      ): null}
      {!gameOver ? <p className='score'>Score: {score}</p> : null}
      {loading && <p>Loading Questions ...</p>}
      {!loading && !gameOver && (
      <QuestionCard 
        questionNr={number + 1}
        totalQuestions={TOTAL_QUESTIONS}
        question={questions[number].question}
        answers={questions[number].answers}
        userAnswer={userAnswers ? userAnswers[number] : undefined}
        callback={checkAnswer}
      />
      )}
      {!gameOver && !loading && userAnswers.length === +1 && number !== TOTAL_QUESTIONS -1 ? (

     
      <button className='next' onClick={nextQuestion}>
        Next Question
      </button>
      ): null}
      </div>

      </>
  );
};

export default App;
