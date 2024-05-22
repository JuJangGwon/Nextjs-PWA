"use client";

import { useState, useEffect } from "react";

export default function DiaryStatics({ onClickExist, days }: any) {
  const [selected, setSelected] = useState(true);
  const [emoticon, setEmoticon] = useState("");
  const [status, setStatus] = useState("none");
  useEffect(() => {
    if (days) {
      let happy = 0;
      let angry = 0;
      let normal = 0;
      days.forEach((item: any) => {
        if (item.feel === "happy") {
          happy++;
        }
        if (item.feel === "angry") {
          angry++;
        }
        if (item.feel === "normal") {
          normal++;
        }
      });
      if (happy === 0 && angry === 0 && normal === 0) {
        setStatus("none");
        setEmoticon("😁");
      } else if (happy > angry && normal < happy) {
        setStatus("긍정적");
        setEmoticon("😁");
      } else if (happy < angry && normal < angry) {
        setStatus("부정적");
        setEmoticon("😡");
      } else if (happy === angry || (normal > happy && normal > angry)) {
        setStatus("중립적");
        setEmoticon("😌");
      }
    }
  }, [days]);

  function getHappy() {
    return (
      <div className="bg-white w-full h-full">
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
            마음을 느끼고 표현하는 것은 긍정적인 감정을 키우고 행복을 증진시키는
            데 도움이 됩니다.
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
    );
  }

  function getAngry() {
    return (
      <div className="bg-white h-full">
        <div className="w-[92%] mx-auto my-4">
          <div className="w-[92%] mx-auto my-4">
            <p className="ml-4">
              현재 부정적인 감정이 압도적으로 높은 상황입니다. 전문가의 도움을
              받는 것을 우선적으로 고려하는것을 추천합니다.
            </p>
          </div>
          <p className="text-lg font-semibold">
            1. 전문가의 도움 :<br />
          </p>
          <p className="ml-4">
            지속적인 우울감, 불안감, 스트레스 등을 경험하고 있다면 전문가의
            상담을 통해 정확한 진단과 치료를 받는 것이 중요합니다.
            <br />
            심리 상담, 정신과 치료, 약물 치료 등 다양한 자료 방법을 통해 증상
            완화와 삶의 질 향상을 도울 수 있습니다.
          </p>
        </div>
        <div className="w-[92%] mx-auto my-4">
          <p className="text-lg font-semibold">
            2. 부정적인 감정 감소 :<br />
          </p>
          <p className="ml-4">
            부정적인 사고 방식을 긍정적인 사고방식으로 바꾸는 노력을 해보세요.
            인지 행동 치료 등을 통해 부정적인 생각을 인시하고 바꾸는 방법을
            배우고 실철 할 수 있습니다.
            <br />
            충분한 휴식과 수면, 규칙적인 운동, 건강한 식습관 등을 통해 몸과
            마음의 건강을 유지하는 것이 중요합니다.
          </p>
        </div>
      </div>
    );
  }

  function getNormal() {
    return (
      <div className="bg-white h-full">
        <div className="w-[92%] mx-auto my-4">
          <div className="w-[92%] mx-auto my-4">
            <p className="ml-4"></p>
          </div>
          <p className="text-lg font-semibold">
            1. 균형 잡힌 감정 유지에 집중하세요.:
            <br />
          </p>
          <p className="ml-4">
            긍정적인 감정 증진 : 좋아하는 활동, 감사 표현, 긍정적인 사고
            방식등을 통해 긍정적인 감정을 높이세요.
            <br />
            중립적인 감정 활용 : 충분한 휴식, 새로운 경험, 목표 설정 등을 통해
            균형과 재충전을 유지하세요.
          </p>
        </div>
        <div className="w-[92%] mx-auto my-4">
          <p className="text-lg font-semibold">
            2. 부정적인 감정 감소 :<br />
          </p>
          <p className="ml-4">
            부정적인 사고 방식을 긍정적인 사고방식으로 바꾸는 노력을 해보세요.
            인지 행동 치료 등을 통해 부정적인 생각을 인시하고 바꾸는 방법을
            배우고 실철 할 수 있습니다.
            <br />
            충분한 휴식과 수면, 규칙적인 운동, 건강한 식습관 등을 통해 몸과
            마음의 건강을 유지하는 것이 중요합니다.
          </p>
        </div>
      </div>
    );
  }
  if (status === "none") {
    return (
      <div className="w-full h-screen bg-gray-50">
        <button
          onClick={() => onClickExist(false)}
          className="ml-4 pt-4 text-xl"
        >
          X
        </button>
        <p className="mx-auto w-fit text-center text-xl pt-[6rem]">
          데이터가 부족합니다.. <br /> 일기를 작성해주세요!
        </p>
      </div>
    );
  }
  return (
    <div className="w-full h-screen bg-gray-50">
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
        <div className="bg-white h-full w-full ">
          <div className="bg-white w-[92%] h-[21rem] mx-4 mt-4">
            <h1 className="mx-auto text-black text-center text-xl text-bold mt-2">
              주간 통계
              <p className="w-[9rem] h-[9rem] mx-auto bg-gray-200 mt-4 text-8xl py-5">
                {emoticon}
              </p>
            </h1>
            {status !== "" ? (
              <div>
                <p className="text-center font-bold my-2">
                  {`주장권님의 감정은 ${status}일 때가 많아요`}
                </p>
                <div className="flex w-[92%] mx-auto">
                  <p className="mx-3 font-bold ">긍정</p>
                  <div className="w-[80%] h-[1.6rem] bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`h-[1.6rem] bg-green-500  rounded-full overflow-hidden`}
                      style={{
                        width: `${
                          status === "긍정적"
                            ? "60%"
                            : status === "부정적"
                            ? "1%"
                            : "20%"
                        }`,
                      }}
                    />
                  </div>
                </div>
                <div className="flex w-[92%] mx-auto mt-2">
                  <p className="mx-3 font-bold ">중립</p>
                  <div className="w-[80%] h-[1.6rem] bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`h-[1.6rem] bg-yellow-500  rounded-full overflow-hidden`}
                      style={{
                        width: `${
                          status === "긍정적"
                            ? "20%"
                            : status === "부정적"
                            ? "25%"
                            : "70%"
                        }`,
                      }}
                    />
                  </div>
                </div>
                <div className="flex w-[92%] mx-auto my-2">
                  <p className="mx-3 font-bold ">부정</p>
                  <div className="w-[80%] h-[1.6rem] bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`h-[1.6rem] bg-red-500  rounded-full overflow-hidden`}
                      style={{
                        width: `${
                          status === "긍정적"
                            ? "1%"
                            : status === "부정적"
                            ? "70%"
                            : "20%"
                        }`,
                      }}
                    />
                  </div>
                </div>
              </div>
            ) : (
              <h1>통계 데이터가 부족합니다</h1>
            )}
            {status === "긍정적" && getHappy()}
            {status === "부정적" && getAngry()}
            {status === "중립적" && getNormal()}
          </div>
        </div>
      ) : (
        <p>현재 구현 진행중입니다</p>
      )}
    </div>
  );
}
