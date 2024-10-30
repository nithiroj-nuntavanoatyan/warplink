import Link from "next/link";

export default function Home() {

  return (
    <div className="">
      <div className="h-screen flex justify-center items-center">
        <div className="flex flex-col items-center font-bold text-4xl md:text-6xl lg:text-8xl text-[#e9f6f4]">
          WarpYoonai 😭
          <div className="flex gap-4 p-4 items-center flex-col sm:flex-row">
            <Link href="/pages/home">
              <button className="text-[#e9f6f4] bg-[#6b90aa] rounded-2xl flex items-center justify-center gap-2 text-2xl sm:text-3xl p-4">
                Go go !
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}