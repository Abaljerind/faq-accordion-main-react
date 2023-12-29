import QuestionAnswer from "./QuestionAnswer";

export default function Header() {
  return (
    <main className="h-[720px] flex justify-center items-center">
      <section className="w-4/12 bg-white border border-white rounded-xl p-6 relative">
        <img
          className=""
          src={require("../images/icon-star.svg").default}
          alt="star"
        />
        <h1 className="font-bold text-5xl text-darkPurple absolute top-5 left-20">
          FAQs
        </h1>
        <QuestionAnswer
          question="What is Frontend Mentor, and how will it help me?"
          answer="Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building."
        />
        <QuestionAnswer
          question="Is Frontend Mentor free?"
          answer="Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels."
        />
        <QuestionAnswer
          question="Can I use Frontend Mentor projects in my portfolio?"
          answer="Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!"
        />
        <QuestionAnswer
          question="How can I get help if I'm stuck on a Frontend Mentor challenge?"
          answer="The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members."
        />
      </section>
    </main>
  );
}
