export default function FeelContent({ days, setIsStatics }: any) {
  return (
    <div className="w-[90%] h-fit mx-auto rounded-lg bg-[#66D9FA] ">
      <div className="w-fit mx-auto">
        <h1 className="text-white my-2">제일 많이 느낀 감정</h1>
        <div className="bg-gray-200 w-[7rem] h-[7rem]">
          <p className="text-xl text-black text-center py-12">행복함</p>
        </div>
        <button className="text-white my-2" onClick={() => setIsStatics(true)}>
          {" "}
          감정 통계 보러가기
        </button>
      </div>
    </div>
  );
}
