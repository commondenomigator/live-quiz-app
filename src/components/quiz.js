import React, { useState, useEffect } from "react"

import Question from "./question"
import NewQuestion from "./newQuestion"
import "./quiz.css"

function Quiz() {
  const [questions, setQuestions] = useState([])
  const [selectedAnswers, setSelectedAnswers] = useState([])

  useEffect(() => {
    const dummyQuestions = [
      {
        text: "Question 1",
        answers: ["Answer 0", "Answer 1", "Answer 2"],
        correct: 1,
      },
      {
        text: "How are you?",
        answers: ["Great!", "Not so great"],
        correct: 0,
      },
    ]
    setQuestions(dummyQuestions)
    setSelectedAnswers(dummyQuestions.map(() => -1))
  }, [])

  function handleSelect(i, val) {
    let copy = selectedAnswers.slice()
    copy[i] = val
    setSelectedAnswers(copy)
    console.log(copy)
  }

  function submit() {
    let correct = 0
    for (let i = 0; i < questions.length; i++) {
      if (selectedAnswers[i] === questions[i].correct) {
        correct++
      }
    }
    alert("You got " + correct + " out of " + questions.length + " correct!")
  }

  function renderQuestions() {
    return questions.map((question, i) => (
      <div>
        <Question index={i} question={question} handleSelect={handleSelect} />
      </div>
    ))
  }

  function addQuestion(question) {
    setQuestions(questions.concat([question]))
  }

  return (
    <div className="quiz">
      <h1>My Quiz</h1>
      {renderQuestions()}
      <NewQuestion submit={addQuestion} />
      <button className="submit" onClick={submit}>
        Submit Answers
      </button>
    </div>
  )
}

export default Quiz
