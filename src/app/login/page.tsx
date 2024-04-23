"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

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
    <main className="min-w-[360px] max-w-[600px] mx-auto h-[720px] bg-white">
      <div className="w-[300px] h-[200px]  mx-auto  border-2 border-gray-300 rounded-lg">
        <div className="h-fit w-fit mx-auto mt-[2rem] ">
          <div className="flex w-[240px]">
            <label className="w-[10rem] text-center">아이디 </label>
            <input
              onChange={(event) => setId(event.target.value)}
              className="w-[10rem] h-[2rem] border-black border-2"
            />
          </div>
          <div className="flex w-[240px] my-1">
            <label className="w-[10rem] text-center">비밀번호 </label>
            <input
              type="password"
              onChange={(event) => setPw(event.target.value)}
              className="w-[10rem] h-[2rem] border-black border-2"
            />
          </div>
          <button
            onClick={onClickLoginButton}
            className="w-[15rem] h-[2rem] mt-4 mx-auto border-2 border-black rounded-lg "
          >
            로그인
          </button>
        </div>
      </div>
    </main>
  );
}
