"use client";

import { useState } from "react";

export default function Login() {
  const [day, setDay] = useState("");
  const [content, setContent] = useState("");
  const [feel, setFeel] = useState("");
  const [i1, seti1] = useState("");
  const [i2, seti2] = useState("");
  const [i3, seti3] = useState("");

  function onClickLoginButton() {
    localStorage.setItem(`${day.toString()}c`, content);
    localStorage.setItem(
      `${day.toString()}f`,
      JSON.stringify([feel, parseInt(i1), parseInt(i2), parseInt(i3)])
    );
    console.log(day, content, feel, i1, i2, i3);
    alert("등록되었습니다.");
  }

  return (
    <div className="grid">
      <label>월</label>
      <input />
      <label>일</label>
      <input onChange={(event) => setDay(event.target.value)} />
      <label>내용</label>
      <textarea onChange={(event) => setContent(event.target.value)} />
      <label>감정</label>
      <input onChange={(event) => setFeel(event.target.value)} />
      <label>행복</label>
      <input onChange={(event) => seti1(event.target.value)} />
      <label>슬픔</label>
      <input onChange={(event) => seti2(event.target.value)} />
      <label>화남</label>
      <input onChange={(event) => seti3(event.target.value)} />
      <button onClick={onClickLoginButton}>버튼 </button>
    </div>
  );
}
