"use client";
import { useEffect, useState } from "react";

export default function DiaryAnalyze({
  setIsEditorOpen,
  setIsAnalize,
  feel,
  diaryText,
}: any) {
  const newDate = new Date();
  const [emoticons, setEmoticons] = useState("😁");
  const [mine, setMine] = useState("fail");
  const [num1, setNum1] = useState(1);
  const [num2, setNum2] = useState(1);
  const [num3, setNum3] = useState(1);

  useEffect(() => {
    if (feel[0] === "happy") {
      setEmoticons("😁");
      setMine("행복함");
      setNum1(50 + Math.floor(Math.random() * 15) + feel[1]);
      setNum2(Math.min(25, feel[3] * 3));
      setNum3(Math.min(25, feel[2] * 3));
    } else if (feel[0] === "angry") {
      setEmoticons("😡");
      setMine("화남");
      setNum3(50 + Math.floor(Math.random() * 15) + feel[3]);
      setNum1(Math.min(25, feel[1] * 3));
      setNum2(Math.min(25, feel[2] * 3));
    } else if (feel[0] === "sad") {
      setEmoticons("😭");
      setMine("슬픔");
      setNum2(50 + Math.floor(Math.random() * 15) + feel[2]);
      setNum1(Math.min(25, feel[1] * 3));
      setNum3(Math.min(25, feel[3] * 3));
    } else if (feel[0] === "normal") {
      setEmoticons("😌");
      setMine("평범");
      setNum1(Math.min(45, feel[1] * 3));
      setNum2(Math.min(45, feel[3] * 3));
      setNum3(Math.min(45, feel[2] * 3));
    }
    console.log(feel);
  }, [feel]);

  useEffect(() => {
    if (num1 !== 1 && num2 !== 1) {
      console.log(num1, num2, num3);
    }
  }, [num1, num2, num3]);

  useEffect(() => {});

  return (
    <div className="bg-gray-100 w-full h-full">
      <div className="flex justify-between">
        <div />
        <button
          onClick={() => {
            if (feel === "fail" || feel === "") {
              setIsAnalize(false);
            }
            setIsEditorOpen(false);
          }}
          className="mr-8 mt-4 text-xl"
        >
          X
        </button>
      </div>
      {mine !== "fail" ? (
        <div>
          <div className="w-full mx-4 mt-2">
            <h2 className="text-black font-bold mb-1">오늘 내 기분은</h2>
            <div className="bg-white w-[92%] h-[7rem] rounded-md flex">
              <p className="w-[4.8rem] h-[4.8rem] text-[60px] text-center bg-slate-100 my-auto mx-6">
                {emoticons}
              </p>
              <div className="my-auto">
                <p className="text-black font-bold text-xl">{`감정 : ${mine}`}</p>
                <p className="text-gray-600 font-semibold mt-2">{`${newDate.getFullYear()}.${
                  newDate.getMonth() + 1
                }.${newDate.getDate()}`}</p>
              </div>
            </div>
          </div>
          <div className="w-full mx-4 mt-6">
            <h2 className="text-black font-bold mb-2">오늘 나는</h2>
            <div className="bg-white w-[92%] h-full rounded-md">
              <div className="flex w-[92%] mx-auto pt-8">
                <p className="mx-3 font-bold ">긍정</p>
                <div className="w-[80%] h-[1.6rem] bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className={`h-[1.6rem] bg-green-500  rounded-full overflow-hidden`}
                    style={{
                      width: `${num1}%`,
                    }}
                  />
                </div>
              </div>
              <div className="flex w-[92%] mx-auto mt-2">
                <p className="mx-3 font-bold ">우울</p>
                <div className="w-[80%] h-[1.6rem] bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className={`h-[1.6rem] bg-yellow-500  rounded-full overflow-hidden`}
                    style={{
                      width: `${num2}%`,
                    }}
                  />
                </div>
              </div>
              <div className="flex w-[92%] mx-auto my-2">
                <p className="mx-3 font-bold ">분노</p>
                <div className="w-[80%] h-[1.6rem] bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className={`h-[1.6rem] bg-red-500  rounded-full overflow-hidden`}
                    style={{
                      width: `${num3}%`,
                    }}
                  />
                </div>
              </div>
              <p className="w-full h-full px-10 py-4">
                {diaryText}
                <br />
                <br />
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsEditorOpen(false)}
            className="bg-[#01C1F8] w-[92%] h-[4rem] rounded-md text-white mx-4 mt-6"
          >
            감정 통계 보러가기
          </button>
        </div>
      ) : (
        <div className="bg-white w-[94%] h-[40rem] mx-auto">
          <p className="text-center text-bold text-2xl pt-[12rem]">
            ai 분석 오류. 올바른 형식으로 <br /> <br /> 일기 내용을
            작성해주세요.!
          </p>
        </div>
      )}
    </div>
  );
}
