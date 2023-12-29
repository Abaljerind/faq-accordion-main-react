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
      </section>
    </main>
  );
}
