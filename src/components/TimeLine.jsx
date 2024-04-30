import React from "react";

const Timeline = () => {
  return (
    <div className="w-[1327px] m-auto flex">
      <div>
        <div className="h-2 bg-slate-300 mt-6 w-[440px]"></div>
        <div className="flex gap-5 -mt-[2.7px]">
          {["13:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00"].map(
            (el, index) => (
              <div
                key={index}
                className="flex flex-col justify-center items-center"
              >
                <span className="-mt-[43px] text-5xl text-slate-700">.</span>
                <span className="text-blue-400 font-bold">{el}</span>
              </div>
            )
          )}
        </div>
      </div>

      <div>
        <div className="h-2 bg-red-400 mt-6 w-[628px]"></div>
        <div className="flex gap-5 -mt-[2.7px] justify-between">
          {[
            "21:00",
            "22:00",
            "23:00",
            "00:00",
            "01:00",
            "02:00",
            "03:00",
            "04:00",
            "05:00",
            "06:00",
            "07:00",
          ].map((el, index) => (
            <div key={index} className="flex flex-col justify-center">
              {index == 0 ? (
                <span className="-mt-[10px] bg-red-500 w-4 h-4 rounded-full"></span>
              ) : index != 10 ? (
                <span className="-mt-[45px] text-5xl text-red-700">.</span>
              ) : (
                <span className="-mt-[10px] bg-red-500 w-4 h-4 rounded-full"></span>
              )}
              <span className="text-blue-400 font-bold">{el}</span>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="h-2 bg-slate-300 mt-6 w-[270px] -ml-[25px]"></div>
        <div className="flex gap-7 -mt-[2.7px] pl-10">
          {["08:00", "10:00", "11:00", "12:00"].map((el, index) => (
            <div key={index} className="flex flex-col ">
              <span className="-mt-[43px] text-5xl text-slate-700">.</span>
              <span className="text-blue-400 font-bold -ml-4">{el}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
