export default function WinorLose() {
  return (
    <>
      {" "}
      <div className="flex  w-full  mt-24 mb-20 gap-5  bg-no-repeat  bg-center flex-wrap justify-between items-center  ">
        <div className="h-50 flex flex-col items-center justify-center ">
          <div className="h-36 flex flex-col ">
            <div className="w-32 h-32 bg-[#dc2e4eff] flex justify-center items-center rounded-full mx-auto">
              <div className="bg-white rounded-full w-22 h-22 p-6 mx-auto inset-shadow-sm/50 inset-shadow-black">
                <img
                  src="/images/icon-rock.svg"
                  className="mx-auto"
                  alt="Rock Icon"
                />
              </div>
            </div>{" "}
          </div>
          <p className="text-center text-white font-semibold">YOU PICKED</p>
        </div>

        <div className="h-50 flex flex-col items-center justify-center ">
          <div className="h-36 flex flex-col ">
            <div className="w-32 h-32 bg-[#ec9e0eff] flex justify-center items-center rounded-full mx-auto">
              <div className="bg-white rounded-full w-22 h-22 p-6 mx-auto inset-shadow-sm/50 inset-shadow-black">
                <img
                  src="/images/icon-scissors.svg"
                  className="mx-auto"
                  alt="Scissors Icon"
                />
              </div>
            </div>{" "}
          </div>
          <p className="text-center text-white font-semibold">
            THE HOUSE PICKED
          </p>
        </div>
      </div>
      {/* Results */}
      <div>
        <h2 className="text-center text-white font-bold text-6xl ">YOU WIN </h2>
        <p className="text-center bg-white w-56 rounded-md p-3.5 mx-auto mt-5 text-md font-semibold text-[#565469ff] tracking-widest">
          {" "}
          PLAY AGAIN
        </p>
      </div>
    </>
  );
}
