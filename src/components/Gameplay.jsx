export default function Gameplay(props) {
  return (
    <div className="mt-30 sm:mt-30 flex justify-center">
      <div className="flex sm:w-md w-full gap-5 bg-[url('/images/bg-triangle.svg')] bg-no-repeat bg-[length:250px]  bg-center flex-wrap justify-around items-center  ">
        {props.items.map(
          ({ name, mainColour, wrapperColour, imageSource, id }) => (
            <div
              key={id}
              style={{ backgroundColor: wrapperColour }}
              className={`bg-[${wrapperColour}] w-32 h-[134px] sm:w-40 sm:h-42 rounded-full hover:cursor-pointer`}
              onClick={() => props.select(name)}
            >
              <div
                style={{ backgroundColor: mainColour }}
                className={`w-32 h-32 sm:w-40  sm:h-40 bg-[${mainColour}] flex justify-center items-center rounded-full`}
              >
                <div className="bg-[#d8d5d5] rounded-full w-22 h-[93px]  sm:w-30 sm:h-[126px] flex items-end ">
                  <div className="bg-white rounded-full w-22 h-22  sm:w-30 sm:h-30 p-6 mx-auto  ">
                    <img
                      src={imageSource}
                      className="mx-auto sm:w-14"
                      alt="Paper Icon"
                    />
                  </div>
                </div>
              </div>
            </div>
          ),
        )}
      </div>
    </div>
  );
}
