import Link from "next/link";

export default function Page() {
    return (
        <div className="relative flex flex-col h-dvh items-center justify-center overflow-hidden">
            <div className="absolute z-0 grid grid-cols-4 left-48 bottom-24 max-md:hidden [mask-image:radial-gradient(circle,black_40%,transparent_70%)]">
        <div className="flex flex-col items-center justify-center">
          <div className="w-16 h-16 border border-zinc-200" />
          <div className="w-16 h-16 border border-zinc-200" />
          <div className="w-16 h-16 border border-zinc-200" />
          <div className="w-16 h-16 border border-zinc-200" />
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="w-16 h-16 border border-zinc-200" />
          <div className="w-16 h-16 border border-zinc-200" />
          <div className="w-16 h-16 border border-zinc-200" />
          <div className="w-16 h-16 border border-zinc-200" />
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="w-16 h-16 border border-zinc-200" />
          <div className="w-16 h-16 border border-zinc-200" />
          <div className="w-16 h-16 border border-zinc-200" />
          <div className="w-16 h-16 border border-zinc-200" />
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="w-16 h-16 border border-zinc-200" />
          <div className="w-16 h-16 border border-zinc-200" />
          <div className="w-16 h-16 border border-zinc-200" />
          <div className="w-16 h-16 border border-zinc-200" />
        </div>
      </div>

      <div className="absolute z-0 grid grid-cols-4 -right-12 top-24 [mask-image:radial-gradient(circle,black_40%,transparent_70%)]">
        <div className="flex flex-col items-center justify-center">
          <div className="w-16 h-16 border border-zinc-200" />
          <div className="w-16 h-16 border border-zinc-200" />
          <div className="w-16 h-16 border border-zinc-200" />
          <div className="w-16 h-16 border border-zinc-200" />
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="w-16 h-16 border border-zinc-200" />
          <div className="w-16 h-16 border border-zinc-200" />
          <div className="w-16 h-16 border border-zinc-200" />
          <div className="w-16 h-16 border border-zinc-200" />
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="w-16 h-16 border border-zinc-200" />
          <div className="w-16 h-16 border border-zinc-200" />
          <div className="w-16 h-16 border border-zinc-200" />
          <div className="w-16 h-16 border border-zinc-200" />
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="w-16 h-16 border border-zinc-200" />
          <div className="w-16 h-16 border border-zinc-200" />
          <div className="w-16 h-16 border border-zinc-200" />
          <div className="w-16 h-16 border border-zinc-200" />
        </div>
      </div>

            <h2 className="z-20 font-bold text-black text-[10rem] max-md:text-4xl text-center uppercase">not found</h2>

            <Link className="underline uppercase underline-offset-5 mt-12" href="/">
            Back home
            </Link>
        </div>
    );
}