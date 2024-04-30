"use client";

export default function DiaryAnalyze({ setIsEditorOpen }: any) {
  return (
    <div className="bg-gray-100 w-full h-full">
      <div className="flex justify-between">
        <div />
        <button
          onClick={() => setIsEditorOpen(false)}
          className="mr-8 mt-4 text-xl"
        >
          X
        </button>
      </div>
      <div className="w-full mx-4 mt-2">
        <h2 className="text-black font-bold mb-1">오늘 내 기분은</h2>
        <div className="bg-white w-[92%] h-[7rem] rounded-md flex">
          <div className="w-[5rem] h-[5rem] bg-gray-300 my-auto mx-6"></div>
          <div className="my-auto">
            <p className="text-black font-bold text-xl">감정 : 행복함</p>
            <p className="text-gray-600 font-semibold mt-2">24.04.30</p>
          </div>
        </div>
      </div>
      <div className="w-full mx-4 mt-6">
        <h2 className="text-black font-bold mb-2">오늘 나는</h2>
        <div className="bg-white w-[92%] h-[16rem] rounded-md">
          <div className="flex w-[92%] mx-auto pt-8">
            <p className="mx-3 font-bold ">긍정</p>
            <div className="w-[80%] h-[1.6rem] bg-gray-200 rounded-full overflow-hidden">
              <div className="w-[80%] h-[1.6rem] bg-green-500  rounded-full overflow-hidden" />
            </div>
          </div>
          <div className="flex w-[92%] mx-auto mt-2">
            <p className="mx-3 font-bold ">중립</p>
            <div className="w-[80%] h-[1.6rem] bg-gray-200 rounded-full overflow-hidden">
              <div className="w-[30%] h-[1.6rem] bg-yellow-500  rounded-full overflow-hidden" />
            </div>
          </div>
          <div className="flex w-[92%] mx-auto my-2">
            <p className="mx-3 font-bold ">부정</p>
            <div className="w-[80%] h-[1.6rem] bg-gray-200 rounded-full overflow-hidden">
              <div className="w-[1%] h-[1.6rem] bg-red-500  rounded-full overflow-hidden" />
            </div>
          </div>
          <p className="w-full h-full px-10 py-4">
            오늘 사용자님 즐거우시군요?
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
  );
}
