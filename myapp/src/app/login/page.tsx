export default function Login() {
  return (
    <main className="flex min-w-[360px] max-w-[600px] mx-auto h-screen bg-white">
      <div>
        <div>
          <label className="w-[10rem] text-center">아이디 </label>
          <input className="w-[10rem] h-[2rem] border-black border-2" />
        </div>
        <div>
          <label className="w-[10rem]">비밀번호 </label>
          <input className="w-[10rem] h-[2rem] border-black border-2" />
        </div>
      </div>
      <button>로그인</button>
    </main>
  );
}
