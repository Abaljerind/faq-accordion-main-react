import Divider from "./Divider";
import QuestionAnswer from "./QuestionAnswer";

export default function Header() {
  return (
    <main className="h-[720px] flex justify-center items-center">
      <section className="w-[40%] bg-white border border-white rounded-xl p-8 relative top-28">
        <img
          className="mt-3"
          src={require("../images/icon-star.svg").default}
          alt="star"
        />
        <h1 className="font-bold text-5xl text-darkPurple absolute top-10 left-20">
          FAQs
        </h1>

        <QuestionAnswer
          question="What is Frontend Mentor, and how will it help me?"
          answer="Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building."
        />
        <Divider />
        <QuestionAnswer
          question="Is Frontend Mentor free?"
          answer="Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels."
        />
        <Divider />
        <QuestionAnswer
          question="Can I use Frontend Mentor projects in my portfolio?"
          answer="Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!"
        />
        <Divider />
        <QuestionAnswer
          question="How can I get help if I'm stuck on a challenge?"
          answer="The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members."
        />
      </section>
    </main>
  );
}
