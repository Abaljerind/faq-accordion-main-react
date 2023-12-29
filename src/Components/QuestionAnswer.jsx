export default function QuestionAnswer(props) {
  return (
    <article className="mt-6 relative">
      <p className="question text-darkPurple font-bold text-base">
        {props.question}
      </p>
      <p className="answer text-grayishPurple text-sm mt-4">{props.answer}</p>
      <img
        className="absolute -top-1 cursor-pointer right-0"
        src={require("../images/icon-plus.svg").default}
        alt="plus"
      />
    </article>
  );
}
