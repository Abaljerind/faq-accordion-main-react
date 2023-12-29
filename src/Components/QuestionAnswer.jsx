export default function QuestionAnswer(props) {
  return (
    <article className="mt-6 relative">
      <p className="question">{props.question}</p>
      <p className="answer">{props.answer}</p>
      <hr class="h-px my-8 bg-lightPink border-0"></hr>
      <img
        className="absolute -top-1 cursor-pointer right-0"
        src={require("../images/icon-plus.svg").default}
        alt="plus"
      />
    </article>
  );
}
