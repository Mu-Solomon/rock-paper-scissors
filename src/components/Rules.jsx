export default function Rules(props) {
  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center backdrop-blur-3xl">
      <div className="bg-white h-screen absolute sm:relative top-0 left-0 w-full sm:w-100 sm:h-100 sm:mx-auto  z-10 sm:rounded-xl sm:justify-around sm:items-center sm:flex-row sm:flex-wrap  flex flex-col justify-around items-center">
        <h2 className="text-3xl font-bold text-[#141639ff] sm:order-1 ">
          RULES
        </h2>

        <img
          src="/images/image-rules.svg"
          alt="Rules icon"
          className="sm:order-3"
        />

        <img
          src="/images/icon-close.svg"
          alt="Close icon"
          className="sm:order-2 sm:pl-45 hover:cursor-pointer"
          onClick={props.toggleRules}
        />
      </div>
    </div>
  );
}
