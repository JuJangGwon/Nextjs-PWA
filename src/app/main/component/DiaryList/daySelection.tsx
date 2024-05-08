"use client";

import { useState, useEffect } from "react";

export default function DaySelection({ days }: any) {
  const [emoticons, setEmoticons] = useState("😌");

  useEffect(() => {
    if (days.feel === "happy") {
      setEmoticons("😁");
    } else if (days.feel === "angry") {
      setEmoticons("😡");
    } else if (days.feel === "normal") {
      setEmoticons("😌");
    }
    console.log(days);
  }, [days]);

  function getEmoticons(item: any) {
    if (item.feel === "happy") {
      return "😁";
    } else if (item.feel === "angry") {
      return "😡";
    } else if (item.feel === "normal") {
      return "😌";
    }
    return "";
  }

  return (
    <div className="flex h-[8rem] w-full my-2 bg-[#01C1F8] border-t-[0.01rem] border-black px-2">
      {days.map((item: any, index: number) =>
        index === 3 ? (
          <div
            className="w-full mt-1 border-4 border-blue-500 rounded-lg overflow-hidden"
            key={item.days}
          >
            <p className="text-center">{item.num}</p>
            <p className="text-center text-slate-200">{item.days}</p>
            <div className="w-[93%] h-[55%] border-2 mx-auto bg-gray-200">
              {item.content.length > 1 ? (
                <p className="text-black text-center text-6xl">
                  {getEmoticons(item)}
                </p>
              ) : null}{" "}
            </div>
          </div>
        ) : (
          <div className="w-full mx-auto mt-2" key={item.days}>
            <p className="text-center">{item.num}</p>
            <p className="text-center text-slate-200">{item.days}</p>
            <div className="w-[93%] h-[55%] mx-auto border-2 bg-gray-200">
              {item.content.length > 1 ? (
                <p className="text-black text-center text-6xl">
                  {getEmoticons(item)}
                </p>
              ) : null}{" "}
            </div>
          </div>
        )
      )}
    </div>
  );
}
