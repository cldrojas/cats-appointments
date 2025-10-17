import { Hero } from "@components/hero";

export default function Home() {
  return (
    <div className="text-white">
      <main className="flex">
        <Hero />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">

      </footer>
    </div>
  );
}
