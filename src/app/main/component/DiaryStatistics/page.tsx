"use client";

import { Line } from "react-chartjs-2";
import { getHappy, getAngry, getNormal } from "@/utils/getFeelStatic";
import { useState, useEffect } from "react";
import Calendar from "./calendar";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  PointElement,
  Legend,
  LineElement,
} from "chart.js";

// 필요한 차트 구성 요소 등록
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement
);

export default function DiaryStatics({ onClickExist, days }: any) {
  const [selected, setSelected] = useState(true);
  const [emoticon, setEmoticon] = useState("");

  const data = {
    labels: days.map((item: any) => item.num),
    datasets: [
      {
        label: "6.10~6.17",
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(75,192,192,0.4)",
        hoverBorderColor: "rgba(75,192,192,1)",
        data: days.map((item: any) => {
          switch (item.feel[0]) {
            case "happy":
              return 62 + Math.floor(Math.random() * 5);
              break;
            case "sad":
              return 40 + Math.floor(Math.random() * 5);
              break;
            case "angry":
              return 18 - Math.floor(Math.random() * 5);
              break;
            default:
              return null;
              break;
          }
        }),
      },
    ],
  };
  const options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        ticks: {
          callback: function (value : any) {
            if (value === 80) {
              return "";
            } else if (value === 60) {
              return "happy";
            } else if (value === 40) {
              return "sad";
            } else if (value === 20) {
              return "angry";
            } else if (value === 0) {
              return "";
            } else {
              return "";
            }
          },
          stepSize: 20, // 레이블 간의 간격
          max: 80, // y축의 최대값
          min: 0, // y축의 최소값
        },
        // y축에 모든 레이블을 항상 표시
        afterDataLimits: (axis : any) => {
          axis.max = 80;
          axis.min = 0;
        },
      },
    },
  };
  const [status, setStatus] = useState("none");
  useEffect(() => {
    if (days) {
      let happy = 0;
      let angry = 0;
      let normal = 0;
      let sad = 0;
      days.forEach((item: any) => {
        if (item.feel[0] === "happy") {
          happy++;
        }
        if (item.feel[0] === "angry") {
          angry++;
        }
        if (item.feel[0] === "normal") {
          normal++;
        }
        if (item.feel[0] === "sad") {
          sad++;
        }
      });
 

      if (happy === 0 && angry === 0 && sad === 0 && normal === 0) {
        setStatus("none");
        setEmoticon("😁");
      } else if (happy > angry && normal < happy) {
        setStatus("긍정적");
        setEmoticon("😁");
      } else if (happy < angry && normal < angry) {
        setStatus("부정적");
        setEmoticon("😡");
      } else if (sad > angry && happy < sad) {
        setStatus("슬픔");
        setEmoticon("😌");
      } else {
        setStatus("중립");
        setEmoticon("😌");
      }
    }
  }, [days]);

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
              <Line options={options} data={data} />
            ) : (
              <h1>통계 데이터가 부족합니다</h1>
            )}
            {status === "긍정적" && getHappy()}
            {status === "부정적" && getAngry()}
            {status === "슬픔" && getNormal()}
          </div>
        </div>
      ) : (
        <Calendar />
      )}
    </div>
  );
}
