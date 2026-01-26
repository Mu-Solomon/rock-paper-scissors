export default function WinorLose() {
  return (
    <>
      {" "}
      <div className="flex  w-full  mt-24 sm:mt-32 mb-20 gap-5  bg-no-repeat  bg-center flex-wrap justify-between sm:justify-center sm:gap-15 items-center  ">
        <div className="h-50 flex flex-col items-center justify-center ">
          <div className="h-36 sm:h-90 flex flex-col sm:order-2">
            <div className="bg-[#9c1633ff] w-32 h-[134px] sm:w-68 sm:h-71 rounded-full">
              <div className="w-32 h-32 sm:h-68 sm:w-68 bg-[#dc2e4eff] flex justify-center items-center rounded-full mx-auto">
                <div className="bg-[#d8d5d5] rounded-full w-22 h-[93px]  sm:w-50 sm:h-[212px] flex items-end ">
                  <div className="bg-white rounded-full w-22 h-22 sm:h-50 sm:w-50 p-6 mx-auto ">
                    <img
                      src="/images/icon-rock.svg"
                      className="mx-auto sm:w-28 sm:mt-6"
                      alt="Rock Icon"
                    />
                  </div>{" "}
                </div>
              </div>{" "}
            </div>
          </div>
          <p className="text-center text-white font-semibold sm:order-1 sm:my-16 sm:text-2xl">
            YOU PICKED
          </p>
        </div>

        <div className="hidden sm:block sm:mb-2 sm:mt-30">
          <h2 className="text-center text-white font-bold text-6xl ">
            YOU WIN{" "}
          </h2>
          <p className="text-center bg-white w-56 rounded-md p-3.5 mx-auto mt-5 text-md font-semibold text-[#565469ff] tracking-widest">
            {" "}
            PLAY AGAIN
          </p>
        </div>

        <div className="h-50 flex flex-col items-center justify-center ">
          <div className="h-36 sm:h-90 flex flex-col sm:order-2">
            <div className="bg-[#c56b1bff] w-32 h-[134px] sm:w-68 sm:h-71 rounded-full">
              <div className="w-32 h-32 sm:h-68 sm:w-68 bg-[#ec9e0eff] flex justify-center items-center rounded-full mx-auto">
                <div className="bg-[#d8d5d5] rounded-full w-22 h-[93px]  sm:w-50 sm:h-[212px] flex items-end ">
                  <div className="bg-white rounded-full w-22 h-22 sm:h-50 sm:w-50 p-6 mx-auto ">
                    <img
                      src="/images/icon-scissors.svg"
                      className="mx-auto sm:w-28 sm:mt-6"
                      alt="Scissors Icon"
                    />
                  </div>{" "}
                </div>
              </div>{" "}
            </div>
          </div>
          <p className="text-center text-white font-semibold order-1 sm:my-16 sm:text-2xl">
            THE HOUSE PICKED
          </p>
        </div>
      </div>
      {/* Results */}
      <div className="sm:hidden">
        <h2 className="text-center text-white font-bold text-6xl ">YOU WIN </h2>
        <p className="text-center bg-white w-56 rounded-md p-3.5 mx-auto mt-5 text-md font-semibold text-[#565469ff] tracking-widest">
          {" "}
          PLAY AGAIN
        </p>
      </div>
    </>
  );
}
