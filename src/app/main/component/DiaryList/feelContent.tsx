export default function FeelContent({ days, setIsStatics }: any) {
  function getFeel() {
    let happy = 0;
    let normal = 0;
    let angry = 0;
    days.forEach(({ feel }: any) => {
      if (feel === "happy") {
        happy++;
      } else if (feel === "normal") {
        normal++;
      } else if (feel === "angry") {
        angry++;
      }
    });
    if (happy > angry && happy > normal) {
      return "😁";
    } else if (happy < angry && angry > normal) {
      return "😡";
    }
    return "😌";
  }

  return (
    <div className="w-[90%] h-fit mx-auto rounded-lg bg-[#66D9FA] ">
      <div className="w-fit mx-auto">
        <h1 className="text-white my-2">제일 많이 느낀 감정</h1>
        <div className="bg-gray-200 w-[7rem] h-[7rem]">
          <p className="text-black text-center py-6 text-6xl">{getFeel()}</p>
        </div>
        <button className="text-white my-2" onClick={() => setIsStatics(true)}>
          {" "}
          감정 통계 보러가기
        </button>
      </div>
    </div>
  );
}
