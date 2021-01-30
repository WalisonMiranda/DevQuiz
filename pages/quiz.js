import React from "react";

import QuizBackground from "../src/components/QuizBackground";
import QuizContainer from "../src/components/QuizContainer";
import AlternativesForm from "../src/components/AlternativesForm";
import Button from "../src/components/Button";
import QuizLogo from "../src/components/QuizLogo";
import Widget from "../src/components/Widget";
import db from "../db.json";

function ResultWidget({ results }) {
  const totalAcertos =  results.filter((x) => x).length;

  return (
    <Widget>
      <Widget.Header>
        {totalAcertos >= 1 && <h3>Parabéns</h3>}
        {totalAcertos < 1 && <h3>Não foi dessa vez</h3>}
      </Widget.Header>
      <Widget.Content>
        <p>
          Você acertou {' '}
          {/* {results.reduce((acc, cur) => {
            const isAcerto = cur === true;
            if(isAcerto) {
              return acc + 1
            }
            return acc;
          }, 0)}  */}
          {/* {results.filter((x) => x).length} */}
          {totalAcertos} {' '}
          perguntas
        </p>
        <ul>
          {results.map((result, index) => (
            <li key={index}>
              #{index + 1} Resultado: 
              {result === true ? ' Acertou' : ' Errou'}
            </li>
          ))}
        </ul>
        </Widget.Content>
    </Widget>
  );
}

function LoadingWidget() {
  return (
    <Widget>
      <Widget.Header>Carregando...</Widget.Header>
      <Widget.Content>[Desafio do Loading]</Widget.Content>
    </Widget>
  );
}

function QuestionWidget({ 
  question, 
  totalQuestions, 
  questionIndex,
  onSubmit, 
  addResult
}) {

  const [selectedAlternative, setSelectedAlternative] = React.useState(undefined);
  const [isQuestionSubmited, setIsQuestionSubmited] = React.useState(false);
  const questionId = `question__${questionIndex}`;
  const isCorrect = selectedAlternative === question.answer;
  const hasAlternativeSelected = selectedAlternative !== undefined;

  return (
    <Widget>
      <Widget.Header>
        <h3>
          {`Pergunta  
            ${questionIndex + 1}  
            de  
            ${totalQuestions}`}
        </h3>
      </Widget.Header>
      <img
        alt="Descrição"
        style={{
          width: "100%",
          height: "150px",
          objectFit: "cover",
        }}
        src={question.image}
      />
      <Widget.Content>
        <h2>{question.title}</h2>
        <p>{question.description}</p>
        <AlternativesForm
          onSubmit={(e) => {
            e.preventDefault();
            setIsQuestionSubmited(true);
            setTimeout(() => {
              addResult(isCorrect);
              onSubmit();
              setIsQuestionSubmited(false);
              setSelectedAlternative(undefined);
            }, 3 * 1000);
          }}
        >
          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternative__${alternativeIndex}`;
            const alternativeStatus = isCorrect ? 'SUCCESS' : 'ERROR';
            const isSelected = selectedAlternative === alternativeIndex;
            
            return (
              <Widget.Topic
                // Transforma a tag <a> como label
                as="label"
                key={alternativeId}
                htmlFor={alternativeId}
                data-selected={isSelected}
                data-status={isQuestionSubmited && alternativeStatus}
              >
                <input
                  style={{display: 'none'}}
                  name={questionId}
                  id={alternativeId}
                  onChange={() => setSelectedAlternative(alternativeIndex)}
                  type="radio"
                />
                {alternative}
              </Widget.Topic>
            );
          })}
          <Button type="submit" disabled={!hasAlternativeSelected}>
            Confirmar
          </Button>

          <p>alternativa selecionada: {`${selectedAlternative}`}</p>
          {isQuestionSubmited && isCorrect && <p>Você acertou! :)</p>}
          {isQuestionSubmited && !isCorrect && <p>Você errou! :(</p>}
        </AlternativesForm>
      </Widget.Content>
    </Widget>
  );
}

const screenStates = {
  QUIZ: "QUIZ",
  LOADING: "LOADING",
  RESULT: "RESULT",
};

export default function QuizPage() {
  const [screenState, setScreenState] = React.useState(screenStates.LOADING);
  const [results, setResults] = React.useState([]);
  const totalQuestions = db.questions.length;
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const questionIndex = currentQuestion;
  const question = db.questions[questionIndex];

  function addResult(result) {
    setResults([...results, result]);
  }

  React.useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 1 * 1000);
  }, []);

  function handleSubmitQuiz() {
    const nextQuestion = questionIndex + 1;
    if (nextQuestion < totalQuestions) {
      setCurrentQuestion(nextQuestion);
    } else {
      setScreenState(screenStates.RESULT);
    }
  }

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        {screenState === screenStates.QUIZ && (
          <QuestionWidget
            question={question}
            questionIndex={questionIndex}
            totalQuestions={totalQuestions}
            onSubmit={handleSubmitQuiz}
            addResult={addResult}
          />
        )}
        {screenState === screenStates.LOADING && <LoadingWidget />}
        {screenState === screenStates.RESULT && <ResultWidget results={results} />}
      </QuizContainer>
    </QuizBackground>
  );
}
