export default function Scores() {
  return (
    <div className=" border-[#ffffff5b]  rounded-md border-2 mx-auto flex justify-between gap-4 px-5 items-center">
      <h1 className="w-3 text-white font-semibold text-2xl leading-5">
        ROCK PAPER SCISSORS
      </h1>
      <div className="bg-white my-2 px-6 py-2 rounded-md flex flex-col justify-center">
        <p className="font-bold  text-[#2a46c0ff] ">SCORE</p>
        <h2 className="text-5xl font-bold text-[#3b4363ff] ">12</h2>
      </div>
    </div>
  );
}
