"use client";

import { useState } from "react";

interface DiaryEditorProps {
  setIsEditorOpen: (isOpen: boolean) => void;
  text: string;
  setDiaryDatas: (text: string) => void;
  setIsStatics: (b: boolean) => void;
  setIsAnalize: (b: boolean) => void;
}

const newDate = new Date();

export default function DiaryEditor({
  setIsEditorOpen,
  setDiaryDatas,
  setIsAnalize,
  text,
  setIsStatics,
}: DiaryEditorProps) {
  const [diaryText, setDiaryText] = useState(text);
  const [isLoading, setIsLoading] = useState(false);

  function onClickFinish() {
    if (diaryText.length >= 30) {
      setIsLoading(true);
      setTimeout(() => {
        setDiaryDatas(diaryText);
        setIsEditorOpen(false);
        setIsAnalize(true);
      }, 3000);
    } else {
      alert("일기 내용을 최소 30자 이상 입력해주세요");
    }
  }

  return (
    <div className="w-full h-fit relative bg-gray-100">
      <div className="w-full flex justify-between px-2 py-2 ">
        <button
          className="px-2 py-1 rounded-sm mt-3"
          onClick={() => {
            setIsEditorOpen(false);
            setIsAnalize(false);
            setIsStatics(false);
          }}
        >
          {"<"}
        </button>
        <h1 className="text-xl mt-3 font-semibold">오늘의 일기 </h1>
        <div />
      </div>
      <div className="w-full mx-4 justify-center">
        <div className="w-[92%] bg-white h-[3rem] my-auto">
          <p className="py-3 py-auto my-auto px-1">{`${newDate.getFullYear()}.${
            newDate.getMonth() + 1
          }.${newDate.getDate()}`}</p>
        </div>
        <textarea
          value={diaryText}
          className="my-4 h-[600px] w-[92%] bg-white focus:outline-none px-2 py-1"
          onChange={(event) => setDiaryText(event.target.value)}
        />
      </div>
      <button
        className="border-2 border-slate-200 h-[4rem] w-[92%] mx-4 px-2 py-1 bg-[#01C1F8] text-white rounded-lg"
        onClick={() => onClickFinish()}
      >
        일기 작성 완료
      </button>
      {isLoading && (
        <div className="absolute w-full h-full top-0 bg-black bg-opacity-50">
          <h1 className="text-white text-center mt-[10rem] text-2xl">
            Ai 감정 분석 진행중
          </h1>
          <div className="flex justify-center items-center">
            <div className="animate-spin rounded-full h-[10rem] w-[10rem]  mt-8 border-t-8 border-b-2 border-purple-500"></div>
          </div>
        </div>
      )}
    </div>
  );
}
