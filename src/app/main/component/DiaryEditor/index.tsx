"use client";
import { useState } from "react";

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
  return (
    <div className="w-full h-full">
      <div className="flex justify-between px-2 py-2">
        <button
          className="border-2 border-slate-200 px-2 py-1 rounded-sm"
          onClick={() => setIsEditorOpen(false)}
        >
          뒤로 가기
        </button>
        <h1 className="text-xl">일기 작성 </h1>
        <button
          className="border-2 border-slate-200 px-2 py-1 rounded-sm"
          onClick={() => {
            setDiaryDatas(diaryText);
            setIsEditorOpen(false);
          }}
        >
          작성 완료
        </button>
      </div>
      <div className="flex justify-center">
        <input
          value={diaryText}
          className="my-4 h-[600px] w-[95%] bg-gray-200 "
          onChange={(event) => setDiaryText(event.target.value)}
          placeholder="내용을 작성해주세요."
        />
      </div>
    </div>
  );
}
