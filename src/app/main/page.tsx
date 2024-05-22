"use client";

import { useState } from "react";

import feelChecker from "@/utils/feelChecker";
import DiaryList from "./component/DiaryList";
import DiaryContent from "./component/DiaryContent/diaryContent";
import DiaryAnalyze from "./component/DiaryAnalyze/page";
import DiaryEditor from "./component/DiaryEditor";
import DiaryStatics from "./component/DiaryStatistics/page";

const newDate = new Date();
function getDayOfWeek(newDate: Date, num: number = 0) {
  const day = new Date(newDate);
  day.setDate(day.getDate() + num);

  switch (day.getDay()) {
    case 0:
      return "SUN";
    case 1:
      return "MON";
    case 2:
      return "TUE";
    case 3:
      return "WEN";
    case 4:
      return "THU";
    case 5:
      return "FRI";
    case 6:
      return "SAT";
  }
}
const localContents = (day: number) => {
  let data = null;
  if (typeof window !== "undefined") {
    data = localStorage.getItem(`${day.toString()}c`);
  }
  return data ? data : "";
};

const localFeel = (day: number) => {
  let data = null;
  if (typeof window !== "undefined") {
    data = localStorage.getItem(`${day.toString()}f`);
  }
  return data ? data : "";
};

export default function Main() {
  const days = [
    {
      num: newDate.getDate() - 3,
      days: getDayOfWeek(newDate, -3),
      content: localContents(newDate.getDate() - 3),
      feel: localFeel(newDate.getDate() - 3),
    },
    {
      num: newDate.getDate() - 2,
      days: getDayOfWeek(newDate, -2),
      content: localContents(newDate.getDate() - 2),
      feel: localFeel(newDate.getDate() - 2),
    },
    {
      num: newDate.getDate() - 1,
      days: getDayOfWeek(newDate, -1),
      content: localContents(newDate.getDate() - 1),
      feel: localFeel(newDate.getDate() - 1),
    },
    {
      num: newDate.getDate(),
      days: getDayOfWeek(newDate),
      content: localContents(newDate.getDate()),
      feel: localFeel(newDate.getDate()),
    },
    {
      num: newDate.getDate() + 1,
      days: getDayOfWeek(newDate, 1),
      content: localContents(newDate.getDate() + 1),
      feel: localFeel(newDate.getDate() + 1),
    },
    {
      num: newDate.getDate() + 2,
      days: getDayOfWeek(newDate, 2),
      content: localContents(newDate.getDate() + 2),
      feel: localFeel(newDate.getDate() + 2),
    },
    {
      num: newDate.getDate() + 3,
      days: getDayOfWeek(newDate, 3),
      content: localContents(newDate.getDate() + 3),
      feel: localFeel(newDate.getDate() + 3),
    },
  ];

  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [isAnalize, setIsAnalize] = useState(days[3].content ? true : false);
  const [isStatics, setIsStatics] = useState(false);
  const [diaryDatas, setDiaryDatas] = useState(days);

  return (
    <main className="min-w-[360px] max-w-[600px] mx-auto h-full bg-white">
      {isStatics && (
        <DiaryStatics onClickExist={() => setIsStatics(false)} days={days} />
      )}

      {isEditorOpen &&
        (!isAnalize ? (
          <DiaryEditor
            setIsAnalize={setIsAnalize}
            setIsStatics={setIsStatics}
            setIsEditorOpen={setIsEditorOpen}
            text={diaryDatas[3].content}
            setDiaryDatas={(str: string) =>
              setDiaryDatas((data: any) => {
                const stat = feelChecker(str);
                localStorage.setItem(`${newDate.getDate().toString()}c`, str);
                localStorage.setItem(`${newDate.getDate().toString()}f`, stat);
                if (stat !== "fail") {
                  data[3].content = str;
                  data[3].feel = stat;
                }
                return data;
              })
            }
          />
        ) : (
          <DiaryAnalyze
            setIsEditorOpen={setIsEditorOpen}
            diaryText={diaryDatas[3].content}
            feel={diaryDatas[3].feel}
          />
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
