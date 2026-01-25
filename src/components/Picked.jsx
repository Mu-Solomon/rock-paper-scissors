export default function Picked() {
  return (
    <div className="flex  w-full  mt-24 sm:mt-20 mb-20 sm:mb-[-50px] gap-5 sm:gap-20 bg-no-repeat  bg-center flex-wrap justify-between items-center sm:justify-center ">
      <div className="h-50 sm:h-110 sm:justify-center  sm:flex-col-reverse  flex flex-col items-center  justify-center sm:flex-wrap-reverse ">
        <div className="h-36 sm:h-90  flex flex-col ">
          <div className="w-32 h-32 sm:h-68 sm:w-68 bg-[#dc2e4eff] flex justify-center items-center rounded-full mx-auto">
            <div className="bg-white rounded-full w-22 h-22 sm:h-50 sm:w-50 p-6 mx-auto inset-shadow-sm/50 inset-shadow-black">
              <img
                src="/images/icon-rock.svg"
                className="mx-auto sm:w-28 sm:mt-6"
                alt="Rock Icon"
              />
            </div>{" "}
          </div>{" "}
        </div>
        <p className="text-center text-white font-semibold sm:text-2xl sm:pt-1 sm:py-7 tracking-widest">
          YOU PICKED
        </p>
      </div>

      <div className="flex  flex-col sm:flex-col-reverse h-50 sm:h-110 sm:justify-around ">
        <div className="flex flex-col items-center justify-center h-40 sm:h-48 ">
          <div className="bg-[#14163946] rounded-full w-28 h-28 sm:w-48 sm:h-48 p-6 mx-auto sm:mt-[-180px]"></div>
        </div>
        <p className="text-white font-semibold  sm:text-2xl sm:py-7 mt-[-75px] tracking-widest">
          THE HOUSE PICKED
        </p>
      </div>
    </div>
  );
}
