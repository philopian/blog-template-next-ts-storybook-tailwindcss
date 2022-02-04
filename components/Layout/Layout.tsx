import Link from 'next/link'
import { getCurrentYear } from '@/utils/dates'

type Props = {
  title: string
  children: JSX.Element[] | JSX.Element
}

type HomeButtonProp = {
  path?: string
}

type HeaderProps = {
  title: string
}

function HomeButton({ path = '/' }: HomeButtonProp) {
  return (
    <Link href={path}>
      <a>🏡</a>
    </Link>
  )
}

function Header({ title }: HeaderProps) {
  return (
    <header className="bg-pink-600 text-slate-50 mb-8 py-4">
      <div className="container mx-auto flex justify-center">
        <HomeButton />
        <span className="mx-auto">{title}</span>{' '}
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="bg-pink-600 text-slate-50 mt-8 py-4">
      <div className="container mx-auto flex justify-center">&copy; {getCurrentYear()} </div>
    </footer>
  )
}

export default function Layout({ title, children }: Props) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header title={title} />
      <main className="container mx-auto flex-1">{children}</main>
      <Footer />
    </div>
  )
}
