import DiaryListHeader from "./header";
import FeelContent from "./feelContent";
import DaySelection from "./daySelection";

function DiaryList({ setIsStatics, days }: any) {
  return (
    <div className="bg-[#01C1F8] w-full">
      <DiaryListHeader />
      <FeelContent  days ={days} setIsStatics={setIsStatics} />
      <DaySelection days={days} />
    </div>
  );
}

export default DiaryList;
