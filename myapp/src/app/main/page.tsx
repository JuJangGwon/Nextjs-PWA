"use client";
import { useState } from "react";

import DiaryList from "./component/DiaryList";
import DiaryContent from "./component/DiaryContent/diaryContent";
import DiaryEditor from "./component/DiaryEditor";

const days = [
  { num: 24, days: "WEN", content: "" },
  { num: 25, days: "THU", content: "" },
  { num: 26, days: "FRI", content: "" },
  { num: 27, days: "SAT", content: "" },
  { num: 28, days: "SUN", content: "" },
  { num: 29, days: "MON", content: "" },
  { num: 30, days: "TUE", content: "" },
];

export default function Main() {
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [diaryDatas, setDiaryDatas] = useState(days);

  return (
    <main className="min-w-[360px] max-w-[600px] mx-auto h-screen bg-white">
      {isEditorOpen && (
        <DiaryEditor
          setIsEditorOpen={setIsEditorOpen}
          text={diaryDatas[3].content}
          setDiaryDatas={(str: string) =>
            setDiaryDatas((data: any) => {
              console.log(data);
              data[3].content = str;
              return data;
            })
          }
        />
      )}
      {!isEditorOpen && (
        <div className="w-full h-full">
          <DiaryList setDiaryDatas={setDiaryDatas} days={diaryDatas} />
          <DiaryContent
            setIsEditorOpen={setIsEditorOpen}
            diaryData={diaryDatas[3]}
          />
        </div>
      )}
    </main>
  );
}
