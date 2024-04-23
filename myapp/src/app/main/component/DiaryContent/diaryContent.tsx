interface DiaryContentProps {
  diaryData: any;
  setIsEditorOpen: (isOpen: boolean) => void;
}

export default function DiaryContent({
  setIsEditorOpen,
  diaryData,
}: DiaryContentProps) {
  return (
    <button
      className="w-[92%] mx-5 h-full bg-gray-200 mt-3"
      onClick={() => setIsEditorOpen(true)}
    >
      <h1 className="my-2 text-xl font-semibold">오늘의 일기 </h1>
      <h2 className="w-full h-full text-start mx-2 my-2">
        {diaryData.content.length
          ? diaryData.content
          : "작성된 내  용이 없습니다."}
      </h2>
    </button>
  );
}
