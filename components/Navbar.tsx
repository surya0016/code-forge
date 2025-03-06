import Link from "next/link"
import { Code } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href={"/"}>
          <div className="flex items-center ml-12 gap-2 cursor-pointer">
            <Code className="h-6 w-6" />
            <span className="text-xl font-bold">CodeForge</span>
          </div>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link
            href="/problems"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Problems
          </Link>
          <Link
            href="/discuss"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Discuss
          </Link>
          <Link
            href="/learn"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Learn
          </Link>
          <Link
            href="/membership"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Membership
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link
            href="/login"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Login
          </Link>
          <Button>Sign Up</Button>
        </div>
      </div>
    </header>
  )
}

