import {Link, useParams } from 'react-router-dom'

function Survey() {
  const { questionNumber } = useParams()
  const questionNumbreInt = parseInt(questionNumber)
  const prevQuestion = questionNumbreInt === 1 ? 1 : questionNumbreInt - 1
  const nextQuestion = questionNumbreInt + 1

  return (
    <div>
      <h1>Questionnaire 🧮</h1>
      <h2>Question {questionNumber}</h2>
      {/* Lien vers la page précédente, uniquement s'il n'est pas sur la première question */}
      <Link to={`/survey/${prevQuestion}`}>Page Precedente</Link>
      {/* Lien vers la page suivante */}
      {nextQuestion <= 10 ? (
        <Link to={`/survey/${nextQuestion}`}>Page Suivante</Link>
      ) : <Link to="/results">Resultats</Link>}
    </div>
  );
}

export default Survey