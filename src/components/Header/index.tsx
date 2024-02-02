import { Pizza } from 'lucide-react'
import { Avatar, AvatarFallback } from '../ui/avatar'
import Navigation from './Navigation'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 hidden md:flex">
          <a href="/" className="mr-6 flex items-center space-x-2">
            <Pizza className="text-primary" />
            <span className="font-bold text-lg">PizzaGO</span>
          </a>
          <Navigation />
        </div>
        <div className="flex flex-1 items-center justify-between space-x-4 md:justify-end">
          <span>Gabriel Hamasaki</span>
          <Avatar>
            <AvatarFallback className="bg-primary">GH</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  )
}
