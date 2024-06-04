"use client";

import { getHappy, getAngry, getNormal } from "@/utils/getFeelStatic";
import { useState, useEffect } from "react";
import Calendar from "./calendar";

export default function DiaryStatics({ onClickExist, days }: any) {
  const [selected, setSelected] = useState(true);
  const [emoticon, setEmoticon] = useState("");
  const [aangry, setAngry] = useState(0);
  const [ahappy, setHappy] = useState(0);
  const [ssad, setSad] = useState(0);

  const [status, setStatus] = useState("none");
  useEffect(() => {
    if (days) {
      let happy = 0;
      let angry = 0;
      let normal = 0;
      let sad = 0;
      days.forEach((item: any) => {
        if (item.feel[0] === "happy") {
          happy++;
        }
        if (item.feel[0] === "angry") {
          angry++;
        }
        if (item.feel[0] === "normal") {
          normal++;
        }
        if (item.feel[0] === "sad") {
          sad++;
        }
      });
      setAngry(angry);
      setHappy(happy);
      setSad(sad);

      if (happy === 0 && angry === 0 && sad === 0 && normal === 0) {
        setStatus("none");
        setEmoticon("😁");
      } else if (happy > angry && normal < happy) {
        setStatus("긍정적");
        setEmoticon("😁");
      } else if (happy < angry && normal < angry) {
        setStatus("부정적");
        setEmoticon("😡");
      } else if (sad > angry && happy < sad) {
        setStatus("슬픔");
        setEmoticon("😌");
      } else {
        setStatus("중립");
        setEmoticon("😌");
      }
    }
  }, [days]);

  if (status === "none") {
    return (
      <div className="w-full h-screen bg-gray-50">
        <button
          onClick={() => onClickExist(false)}
          className="ml-4 pt-4 text-xl"
        >
          X
        </button>
        <p className="mx-auto w-fit text-center text-xl pt-[6rem]">
          데이터가 부족합니다.. <br /> 일기를 작성해주세요!
        </p>
      </div>
    );
  }
  return (
    <div className="w-full h-screen bg-gray-50">
      <div className="flex justify-between pt-8 mx-4">
        <h1 className="text-2xl font-bold">감정 통계</h1>
        <button onClick={() => onClickExist(false)} className="mr-4 text-xl">
          X
        </button>
      </div>
      <div className="flex justify-between w-[92%] h-[2.5rem] rounded-full overflow-hidden bg-gray-200 text-white mt-4 mx-4">
        <button
          onClick={() => setSelected(true)}
          className={`
          mx-auto h-full ${
            selected
              ? "bg-blue-300 rounded-full w-[50%] "
              : "bg-gray-200 w-[50%]"
          }`}
        >
          기간별 통계
        </button>
        <button
          onClick={() => setSelected(false)}
          className={`mx-auto h-full ${
            !selected
              ? "bg-blue-200 rounded-full w-[50%]"
              : "bg-gray-200 w-[50%]"
          }`}
        >
          요일별 통계
        </button>
      </div>
      {selected ? (
        <div className="bg-white h-full w-full ">
          <div className="bg-white w-[92%] h-[21rem] mx-4 mt-4">
            <h1 className="mx-auto text-black text-center text-xl text-bold mt-2">
              주간 통계
              <p className="w-[9rem] h-[9rem] mx-auto bg-gray-200 mt-4 text-8xl py-5">
                {emoticon}
              </p>
            </h1>
            {status !== "" ? (
              <div>
                <p className="text-center font-bold my-2">
                  {`주장권님의 감정은 ${status}일 때가 많아요`}
                </p>
                <div className="flex w-[92%] mx-auto">
                  <p className="mx-3 font-bold ">긍정</p>
                  <div className="w-[80%] h-[1.6rem] bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`h-[1.6rem] bg-green-500  rounded-full overflow-hidden`}
                      style={{
                        width: `${
                          status === "긍정적"
                            ? "60%"
                            : `${(ahappy * 5).toString()}%`
                        }`,
                      }}
                    />
                  </div>
                </div>
                <div className="flex w-[92%] mx-auto mt-2">
                  <p className="mx-3 font-bold ">슬픔</p>
                  <div className="w-[80%] h-[1.6rem] bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`h-[1.6rem] bg-yellow-500  rounded-full overflow-hidden`}
                      style={{
                        width: `${
                          status === "슬픔"
                            ? "70%"
                            : `${(ssad * 5).toString()}%`
                        }`,
                      }}
                    />
                  </div>
                </div>
                <div className="flex w-[92%] mx-auto my-2">
                  <p className="mx-3 font-bold ">부정</p>
                  <div className="w-[80%] h-[1.6rem] bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`h-[1.6rem] bg-red-500  rounded-full overflow-hidden`}
                      style={{
                        width: `${
                          status === "부정적"
                            ? "70%"
                            : `${(aangry * 5).toString()}%`
                        }`,
                      }}
                    />
                  </div>
                </div>
              </div>
            ) : (
              <h1>통계 데이터가 부족합니다</h1>
            )}
            {status === "긍정적" && getHappy()}
            {status === "부정적" && getAngry()}
            {status === "슬픔" && getNormal()}
          </div>
        </div>
      ) : (
        <Calendar />
      )}
    </div>
  );
}
