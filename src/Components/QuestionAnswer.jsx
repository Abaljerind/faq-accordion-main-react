export default function QuestionAnswer(props) {
  return (
    <article className="mt-6">
      <p className="question mt-4">{props.question}</p>
      <p className="answer">{props.answer}</p>
    </article>
  );
}
