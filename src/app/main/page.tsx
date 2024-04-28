"use client";
import { useState } from "react";

import DiaryList from "./component/DiaryList";
import DiaryContent from "./component/DiaryContent/diaryContent";
import DiaryAnalyze from "./component/DiaryAnalyze/page";
import DiaryEditor from "./component/DiaryEditor";
import DiaryStatics from "./component/DiaryStatistics/page";

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
  const [isAnalize, setIsAnalize] = useState(true);
  const [isStatics, setIsStatics] = useState(false);
  const [diaryDatas, setDiaryDatas] = useState(days);

  return (
    <main className="min-w-[360px] max-w-[600px] mx-auto h-svh bg-white">
      {isStatics && <DiaryStatics onClickExist={() => setIsStatics(false)} />}

      {isEditorOpen &&
        (isAnalize ? (
          <DiaryEditor
            setIsEditorOpen={setIsAnalize}
            text={diaryDatas[3].content}
            setDiaryDatas={(str: string) =>
              setDiaryDatas((data: any) => {
                data[3].content = str;
                return data;
              })
            }
          />
        ) : (
          <DiaryAnalyze setIsEditorOpen={setIsEditorOpen} />
        ))}
      {!isEditorOpen && !isStatics && (
        <div className="w-full h-fit">
          <DiaryList
            setDiaryDatas={setDiaryDatas}
            setIsStatics={setIsStatics}
            days={diaryDatas}
          />
          <DiaryContent
            setIsEditorOpen={setIsEditorOpen}
            diaryData={diaryDatas[3]}
          />
        </div>
      )}
    </main>
  );
}
