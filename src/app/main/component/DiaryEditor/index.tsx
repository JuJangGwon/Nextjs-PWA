"use client";
import { useState } from "react";
import Spinner2 from "@/component/Spinner2";

interface DiaryEditorProps {
  setIsEditorOpen: (isOpen: boolean) => void;
  text: string;
  setDiaryDatas: (text: string) => void;
}

export default function DiaryEditor({
  setIsEditorOpen,
  setDiaryDatas,
  text,
}: DiaryEditorProps) {
  const [diaryText, setDiaryText] = useState(text);
  const [isLoading, setIsLoading] = useState(false);

  function onClickFinish() {
    setIsLoading(true);
    let timer = setTimeout(() => {
      setDiaryDatas(diaryText);
      setIsEditorOpen(false);
    }, 3000);
  }

  return (
    <div className="w-full h-full relative bg-gray-100">
      <div className="w-full flex justify-between px-2 py-2 ">
        <button
          className="px-2 py-1 rounded-sm mt-3"
          onClick={() => setIsEditorOpen(false)}
        >
          {"<"}
        </button>
        <h1 className="text-xl mt-3 font-semibold">오늘의 일기 </h1>
        <div />
      </div>
      <div className="w-full mx-4 justify-center">
        <div className="w-[92%] bg-white h-[3rem] my-auto">
          <p className="py-3 py-auto my-auto px-1">{"24.05.01"}</p>
        </div>
        <input
          value={diaryText}
          className="my-4 h-[600px] w-[92%] bg-white"
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


