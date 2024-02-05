'use client'
import { queryClient } from '@/lib/react-query'
import { QueryClientProvider } from '@tanstack/react-query'

export default function QueryClient({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}
