import { Hero } from '@components/hero'
import { Services } from '@components/services'
import { Login } from '@components/login'

export default function Home() {
  return (
    <div className="text-accent-foreground dark:text-[#fafafa]">
      <main className="block w-full">
        <Hero />
        <Services />
        <Login />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  )
}
