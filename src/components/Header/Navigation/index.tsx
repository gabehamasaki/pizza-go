'use client'
import { cn } from '@/lib/utils'
import { Home, ClipboardList, Package } from 'lucide-react'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const pathname = usePathname()
  return (
    <nav className="flex items-center gap-6 text-sm">
      <a
        href="/"
        className={cn(
          'flex items-center gap-2 transition-colors hover:text-foreground/90 text-foreground/60',
          {
            'text-foreground/90': pathname === '/',
          },
        )}
      >
        <Home />
        Home
      </a>
      <a
        href="/orders"
        className={cn(
          'flex items-center gap-2 transition-colors hover:text-foreground/90 text-foreground/60',
          {
            'text-foreground/90': pathname === '/orders',
          },
        )}
      >
        <ClipboardList />
        Orders
      </a>
      <a
        href="/products"
        className={cn(
          'flex items-center gap-2 transition-colors hover:text-foreground/90 text-foreground/60',
          {
            'text-foreground/90': pathname === '/products',
          },
        )}
      >
        <Package />
        Products
      </a>
    </nav>
  )
}
