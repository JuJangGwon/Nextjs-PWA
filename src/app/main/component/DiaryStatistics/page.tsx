"use client";

import { useState } from "react";

export default function DiaryStatics({ onClickExist }: any) {
  const [selected, setSelected] = useState(true);
  return (
    <div className="w-full h-full bg-gray-50">
      <div className="flex justify-between pt-8 mx-4">
        <h1 className="text-2xl font-bold">감정 통계</h1>
        <button onClick={() => onClickExist(false)} className="mr-4 text-xl">
          X
        </button>
      </div>
      <div className="flex justify-between w-[92%] h-[2.5rem] rounded-full overflow-hidden bg-gray-200 text-white mt-4 mx-4">
        <button
          onClick={() => setSelected(true)}
          className={`
          mx-auto h-full ${
            selected
              ? "bg-blue-300 rounded-full w-[50%] "
              : "bg-gray-200 w-[50%]"
          }`}
        >
          기간별 통계
        </button>
        <button
          onClick={() => setSelected(false)}
          className={`mx-auto h-full ${
            !selected
              ? "bg-blue-200 rounded-full w-[50%]"
              : "bg-gray-200 w-[50%]"
          }`}
        >
          요일별 통계
        </button>
      </div>
      {selected ? (
        <div>
          <div className="bg-white w-[92%] h-[21rem] mx-4 mt-4">
            <h1 className="mx-auto text-black text-center text-xl text-bold mt-2">
              주간 통계
            </h1>
            <div className="w-[9rem] h-[9rem] mx-auto bg-gray-200 mt-4"></div>
            <p className="text-center font-bold my-2">
              주장권님의 감정은 긍정적일 때가 많아요
            </p>
            <div className="flex w-[92%] mx-auto">
              <p className="mx-3 font-bold ">긍정</p>
              <div className="w-[80%] h-[1.6rem] bg-gray-200 rounded-full overflow-hidden">
                <div className="w-[60%] h-[1.6rem] bg-green-500  rounded-full overflow-hidden" />
              </div>
            </div>
            <div className="flex w-[92%] mx-auto mt-2">
              <p className="mx-3 font-bold ">중립</p>
              <div className="w-[80%] h-[1.6rem] bg-gray-200 rounded-full overflow-hidden">
                <div className="w-[40%] h-[1.6rem] bg-yellow-500  rounded-full overflow-hidden" />
              </div>
            </div>
            <div className="flex w-[92%] mx-auto my-2">
              <p className="mx-3 font-bold ">부정</p>
              <div className="w-[80%] h-[1.6rem] bg-gray-200 rounded-full overflow-hidden">
                <div className="w-[10%] h-[1.6rem] bg-red-500  rounded-full overflow-hidden" />
              </div>
            </div>
          </div>
          <h1 className="my-2 font-bold text-black text-center">
            행복과 만족감을 유지하기 위한 3가지 방법
          </h1>
          <div className="w-[92%] mx-auto my-4">
            <p className="text-lg font-semibold">
              1. 긍정적인 관계 유지 <br />
            </p>
            <p className="ml-4">
              가족, 친구, 지인 등 소중한 사람들과의 관계를 유지하고 돈독하 게
              만들어 나가는 것이 중요합니다. 함께 시간을 보내고, 서로에게 지지와
              격려를 아 끼지 않는 노력을 하세요.
            </p>
          </div>
          <div className="w-[92%] mx-auto my-4">
            <p className="text-lg font-semibold">
              2. 감사하는 마음 <br />
            </p>
            <p className="ml-4">
              일상생활 속에서 작은 것에도 감사하는 마음을 잊지 마세요. 감사하 는
              마음을 느끼고 표현하는 것은 긍정적인 감정을 키우고 행복을
              증진시키는 데 도움이 됩니다.
            </p>
          </div>
          <div className="w-[92%] mx-auto my-4">
            <p className="text-lg font-semibold">
              3. 새로운 경험 추구 <br />
            </p>
            <p className="ml-4">
              새로운 것을 경험하고 배우는 것은 삶에 활력을 불어넣고 만족감 을
              높여줍니다. 여행, 취미 활동, 자원봉사 등 다양한 활동을 통해 새로운
              경험을 쌓 아보세요.
            </p>
          </div>
        </div>
      ) : (
        <p>현재 구현 진행중입니다</p>
      )}
    </div>
  );
}
