export default function QuestionAnswer(props) {
  return (
    <article>
      <p className="question">{props.question}</p>
      <p className="answer">{props.answer}</p>
    </article>
  );
}
