import { LayoutDashboard, Pizza } from 'lucide-react'
import { Avatar, AvatarFallback } from '../ui/avatar'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 hidden md:flex">
          <a href="/" className="mr-6 flex items-center space-x-2">
            <Pizza />
            <span className="font-bold text-lg">PizzaGO</span>
          </a>
          <nav className="flex items-center gap-6 text-sm">
            <a
              href="/dashboard"
              className="flex items-center gap-2 transition-colors hover:text-foreground/90 text-foreground/60"
            >
              <LayoutDashboard />
              Dashboard
            </a>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <span>Gabriel Hamasaki</span>
          <Avatar>
            <AvatarFallback>GH</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  )
}
