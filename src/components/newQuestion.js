import React, { useState } from "react"

import "./newQuestion.css"

function NewQuestion({ submit }) {
  const [text, setText] = useState("")
  const [answers, setAnswers] = useState([])
  const [correct, setCorrect] = useState(-1)

  function renderAnswers() {
    return answers.map((answer, i) => (
      <div className="flex">
        <input
          type="radio"
          name="answers"
          checked={correct === i}
          onChange={() => setCorrect(i)}
        ></input>
        <input
          className="answerinput round"
          type="text"
          value={answer}
          onChange={(e) => updateAnswer(e.target.value, i)}
        ></input>
      </div>
    ))
  }

  function updateAnswer(answer, i) {
    let copy = answers.slice()
    copy[i] = answer
    setAnswers(copy)
  }

  function onSubmit() {
    submit({
      text: text,
      answers: answers,
      correct: correct,
    })
  }

  return (
    <span>
      <label className="block" htmlFor={text}>
        Question:
      </label>
      <textarea
        className="questioninput round"
        cols="40"
        rows="3"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      {renderAnswers()}
      <button onClick={(e) => setAnswers(answers.concat([""]))}>
        New Answer
      </button>
      <button classname="addquestion" onClick={onSubmit}>
        Add Question
      </button>
    </span>
  )
}

export default NewQuestion
