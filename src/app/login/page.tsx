"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import nacimban from "../../../public/nacimban.png";

const idd = "test";
const pww = "pw1234";

export default function Login() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const router = useRouter();

  function onClickLoginButton() {
    if (id === idd && pw === pww) {
      router.push("/main");
    } else {
      alert("아이디 또는 비밀번호가 올바르지 않습니다.");
    }
  }

  return (
    <div className="min-w-[360px] max-w-[600px] mx-auto h-screen bg-white text-black">
      <div>
        <h1 className="w-[10rem] text-3xl text-bold text-black mx-auto text-bold pt-[4rem] mb-[4rem] text-center">
          감성 나침반
        </h1>
        <Image
          src={nacimban}
          alt="nacimban"
          className="w-[30%] h-[20%] mx-auto"
        />
        <div className="w-[300px] h-[200px]  mx-auto rounded-lg">
          <div className="h-fit w-fit mx-auto mt-[2rem] ">
            <div className="flex w-[240px] h-[2.6rem] border-[0.1rem] border-black">
              <label className="w-[10rem] text-center my-auto">아이디 </label>
              <input
                onChange={(event) => setId(event.target.value)}
                className="w-[10rem] h-[2rem] focus:outline-none"
              />
            </div>
            <div className="flex w-[240px] h-[2.6rem] my-1 border-[0.1rem] border-black">
              <label className="w-[10rem] text-center my-auto">비밀번호 </label>
              <input
                type="password"
                onChange={(event) => setPw(event.target.value)}
                className="w-[10rem] h-[2rem] focus:outline-none"
              />
            </div>
            <button
              onClick={onClickLoginButton}
              className="w-[15rem] h-[2rem] mt-4 mx-auto border-2 border-black rounded-lg bg-blue-300 text-white"
            >
              로그인
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
