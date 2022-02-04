import Link from 'next/link'
import { getCurrentYear } from '@/utils/dates'

type Props = {
  children: JSX.Element[] | JSX.Element
}

type HomeButtonProp = {
  path?: string
}

function HomeButton({ path = '/' }: HomeButtonProp) {
  return (
    <Link href={path}>
      <a>🏡</a>
    </Link>
  )
}

export default function Layout({ children }: Props) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-pink-600 text-slate-50 mb-8 py-4">
        <div className="container mx-auto flex justify-center">
          <HomeButton />
          <span className="mx-auto">Welcome to my blog</span>{' '}
        </div>
      </header>
      <main className="container mx-auto flex-1">{children}</main>
      <footer className="bg-pink-600 text-slate-50 mt-8 py-4">
        <div className="container mx-auto flex justify-center">&copy; {getCurrentYear()} </div>
      </footer>
    </div>
  )
}
