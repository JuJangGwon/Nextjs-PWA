"use client";
interface DiaryContentProps {
  diaryData: any;
  setIsEditorOpen: (isOpen: boolean) => void;
}

export default function DiaryContent({
  setIsEditorOpen,
  diaryData,
}: DiaryContentProps) {
  return (
    <div>
      <h1 className="text-center text-xl font-bold">오늘의 일기</h1>
      <button
        className="w-[92%] min-h-[14rem] h-full mx-5 bg-gray-200 mt-3"
        onClick={() => setIsEditorOpen(true)}
      >
        <h2
          className={`w-full h-full text-2xl mx-3 pr-6 overflow-hidden text-ellipsis ${
            diaryData.content.length ? "text-start" : "text-center"
          } `}
        >
          {diaryData.content.length
            ? diaryData.content
            : "아직 작성된 내용이 없습니다. "}
        </h2>
      </button>
    </div>
  );
}
