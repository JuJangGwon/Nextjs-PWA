export default function Calendar() {
  interface boxtype {
    i?: number;
  }
  function Box({ i }: boxtype) {
    let feel: string | null = "";
    if (i) {
      feel = localStorage.getItem(`${i.toString()}f`);
    }
    function getFeel() {
      if (feel) {
        feel = JSON.parse(feel);
        if (feel !== null) {
          if (feel[0] === "happy") {
            return "😁";
          } else if (feel[0] === "angry") {
            return "😡";
          } else if (feel[0] === "normal") {
            return "😌";
          } else if (feel[0] === "sad") {
            return "😭";
          }
        }
      }
    }
    return (
      <div className="w-[5rem] h-[5.5rem] border-[0.1rem] m-0 p-0 border-black">
        <p className="ml-1">{i}</p>
        <p className="text-center text-5xl">{i ? getFeel() : null}</p>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-center text-2xl my-4 text-semibold ">
        6월 나의 감정 달력
      </h1>
      <div className="flex gap-0 justify-center">
        <p className="w-[5rem] h-[1.8rem] border-2 border-black text-center">
          일요일
        </p>
        <p className="w-[5rem] h-[1.8rem] border-2 border-black text-center">
          월요일
        </p>
        <p className="w-[5rem] h-[1.8rem] border-2 border-black text-center">
          화요일
        </p>
        <p className="w-[5rem] h-[1.8rem] border-2 border-black text-center">
          수요일
        </p>
        <p className="w-[5rem] h-[1.8rem] border-2 border-black text-center">
          목요일
        </p>
        <p className="w-[5rem] h-[1.8rem] border-2 border-black text-center">
          금요일
        </p>
        <p className="w-[5rem] h-[1.8rem] border-2 border-black text-center">
          토요일
        </p>
      </div>
      <div className="flex gap-0 justify-center">
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box i={1} />
      </div>
      <div className="flex gap-0 justify-center">
        <Box i={2} />
        <Box i={3} />
        <Box i={4} />
        <Box i={5} />
        <Box i={6} />
        <Box i={7} />
        <Box i={8} />
      </div>
      <div className="flex gap-0 justify-center">
        <Box i={9} />
        <Box i={10} />
        <Box i={11} />
        <Box i={12} />
        <Box i={13} />
        <Box i={14} />
        <Box i={15} />
      </div>
      <div className="flex gap-0 justify-center">
        <Box i={16} />
        <Box i={17} />
        <Box i={18} />
        <Box i={19} />
        <Box i={20} />
        <Box i={21} />
        <Box i={22} />
      </div>
      <div className="flex gap-0 justify-center">
        <Box i={23} />
        <Box i={24} />
        <Box i={25} />
        <Box i={26} />
        <Box i={27} />
        <Box i={28} />
        <Box i={29} />
      </div>
      <div className="flex gap-0 justify-center">
        <Box i={30} />
        <Box i={31} />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
      </div>
    </div>
  );
}
