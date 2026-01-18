export default function Gameplay() {
  return (
    <div className="mt-30">
      <div className="flex w-full  gap-5 bg-[url('/images/bg-triangle.svg')] bg-no-repeat bg-[length:250px]  bg-center flex-wrap justify-between items-center  ">
        <div className="w-32 h-32 bg-[#4865f4ff] flex justify-center items-center rounded-full ">
          <div className="bg-white rounded-full w-22 h-22 p-6 mx-auto inset-shadow-sm/50 inset-shadow-black">
            <img
              src="/images/icon-paper.svg"
              className="mx-auto"
              alt="Paper Icon"
            />
          </div>
        </div>

        <div className="w-32 h-32 bg-[#ec9e0eff] flex justify-center items-center rounded-full ">
          <div className="bg-white rounded-full w-22 h-22 p-6 mx-auto inset-shadow-sm/50 inset-shadow-black">
            <img
              src="/images/icon-scissors.svg"
              className="mx-auto"
              alt="Scissors Icon"
            />
          </div>
        </div>
        <div className="w-32 h-32 bg-[#dc2e4eff] flex justify-center items-center rounded-full mx-auto">
          <div className="bg-white rounded-full w-22 h-22 p-6 mx-auto inset-shadow-sm/50 inset-shadow-black">
            <img
              src="/images/icon-rock.svg"
              className="mx-auto"
              alt="Rock Icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
