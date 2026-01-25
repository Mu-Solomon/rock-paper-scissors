export default function Scores() {
  return (
    <div className=" border-[#ffffff5b] mb-[-60px] rounded-md border-2 mx-auto flex justify-between gap-4 px-5 items-center sm:mt-6 sm:w-2/5 sm:rounded-xl">
      <h1 className="w-3 text-white font-semibold text-2xl leading-5 sm:text-4xl sm:leading-7 sm:py-5  sm:font-bold">
        ROCK PAPER SCISSORS
      </h1>
      <div className="bg-white my-2 px-6 py-2 rounded-md flex flex-col justify-center sm:px-10 ">
        <p className="font-bold  text-[#2a46c0ff] sm:tracking-widest ">SCORE</p>
        <h2 className="text-5xl font-bold text-[#3b4363ff] sm:text-6xl ">12</h2>
      </div>
    </div>
  );
}
